import { useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import useNotify from '@/hooks/useNotify';
import Input from '@/components/Atoms/Input';
import Button from '@/components/Atoms/Button';
import CustomInput from '@/components/Atoms/CustomInput';
import DatePicker, { registerLocale } from 'react-datepicker';
import ReactSelect from 'react-select';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

const styles = {};
// import { DevTool } from '@hookform/devtools';

registerLocale('es', es);

const optionList = [
  'Seleccionar Tipo de Delito',
  'Cohecho a Funcionario Público Nacional o Extranjero',
  'Lavado de Activos',
  'Receptación',
  'Financiamiento al Terrorismo',
  'Negociación incompatible',
  'Corrupción entre particulares',
  'Apropiación indebida',
  'Administración desleal',
  'Contaminación de aguas',
  'Violación de veda de productos',
  'Pesca ilegal de recursos del fondo marino',
  'Procesamiento y almacenamiento ilegal de productos escasos',
];

const FormContact = () => {
  const [loading, setLoading] = useState(false);
  const [anonymity, setAnonymity] = useState('si');
  const [startDate] = useState(new Date());
  const recaptchaRef = useRef(null);
  const form = useRef();
  const [notification] = useNotify();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        try {
          const emailResponse = await emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_LAW_ID,
            form.current,
            { publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBlIC_KEY }
          );
          const data = await emailResponse;

          if (data.text !== 'OK') throw new Error(data);

          setLoading(false);
          notification(
            'success',
            'Hemos recibido su mensaje, tomaremos contacto contigo a la brevedad.'
          );
          reset();
        } catch (error) {
          setLoading(false);
          throw new Error(JSON.stringify(error));
        }
      } else {
        const captchaError = await response.json();
        throw new Error(JSON.stringify(captchaError));
      }
    } catch (error) {
      console.log({ error });
      notification(
        'error',
        '¡Mensaje no enviado, por favor inténtalo de nuevo!'
      );
    } finally {
      recaptchaRef.current.reset();
    }
  };

  return (
    <form
      ref={form}
      className="form"
      onSubmit={(e) => handleSubmit(handleClick(e))}
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="form-group">
        <h4 className="py-2">Mantener el anonimato</h4>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="inlineRadio1">
            <span className={styles.formLabel}>Si</span>
            <input
              className="form-check-input"
              type="radio"
              name="openData"
              value="si"
              onChange={(e) => setAnonymity(e.target.value)}
              checked={anonymity === 'si'}
            />
          </label>
        </div>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="inlineRadio2">
            <span className={styles.formLabel}>No</span>
            <input
              className="form-check-input"
              type="radio"
              name="openData"
              value="no"
              onChange={(e) => setAnonymity(e.target.value)}
              checked={anonymity === 'no'}
            />
          </label>
        </div>
      </div>
      {anonymity === 'no' && (
        <>
          <div className="pt-3 form-group">
            <Input
              className={`${styles.formInput} ${errors.username ? styles.formInputError : ''} form-control mt-2`}
              name="username"
              placeholder="Introduce nombre completo"
              rules={{
                required: 'Nombre Requerido',
              }}
              errors={errors.username}
              register={register}
            />
          </div>
          <div className="form-group">
            <Input
              type="email"
              className={`${styles.formInput} ${errors.email ? styles.formInputError : ''} form-control mt-2`}
              name="email"
              placeholder="Introduce tu email"
              rules={{
                required: 'Email Requerido',
              }}
              errors={errors.email}
              register={register}
            />
          </div>
          <div className="form-group">
            <Input
              phone
              type="text"
              className={`${styles.formInput} ${errors.phone ? styles.formInputError : ''} form-control`}
              name="phone"
              placeholder="Introduce tu teléfono"
              rules={{
                required: 'Teléfono Requerido',
              }}
              errors={errors.phone}
              register={register}
            />
          </div>
        </>
      )}
      <div className="form-group row">
        <h4 className="py-4">Detalles del incidente</h4>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-1/2">
            <Controller
              control={control}
              name="event_date"
              value={startDate}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  locale="es"
                  maxDate={new Date()}
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                  customInput={<CustomInput txt="Fecha del incidente" />}
                />
              )}
            />
            <span className={styles.formInputSpanError}>
              {errors?.mensaje?.type === 'required' &&
                'Fecha del incidente requerida'}
            </span>
          </div>
          <div className="md:w-1/2">
            <Controller
              name="optionType"
              control={control}
              rules={{
                required: true,
                validate: (value) => value !== 'Seleccionar Tipo de Delito',
              }}
              render={({ field }) => (
                <ReactSelect
                  className={styles.select}
                  options={optionList.map((item) => ({
                    label: item,
                    value: item,
                  }))}
                  {...field}
                  defaultValue={{ label: optionList[0], value: optionList[0] }}
                />
              )}
            />
            <span className={styles.formInputSpanError}>
              {errors?.mensaje?.type === 'required' &&
                'Tipo de delito requerido'}
            </span>
          </div>
        </div>
      </div>
      <div className="pt-4 form-group">
        <label
          htmlFor="message"
          className="relative block px-4 pt-4 my-4 border border-gray-200 rounded shadow-sm"
        >
          <textarea
            className="w-full text-sm focus:outline-none focus-visible:outline-none"
            rows="8"
            id="message"
            {...register('message')}
          />
          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Mensaje
          </span>
        </label>
      </div>
      <div className="mb-5 form-group">
        <Button
          className="px-4 py-2 mt-4 btn btn-primary text-uppercase"
          text="Enviar Denuncia"
          loading={loading}
          submit
        />
      </div>
      {/* <DevTool control={control} /> */}
    </form>
  );
};

export default FormContact;
