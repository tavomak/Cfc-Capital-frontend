import { useState, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import useNotify from '@hooks/useNotify';
import Button from '@components/Atoms/Button';
import CustomInput from '@components/Atoms/CustomInput';
import DatePicker, { registerLocale } from 'react-datepicker';
import ReactSelect from 'react-select';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.scss';
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

const FormContact = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [anonymity, setAnonymity] = useState('no');
  const [startDate] = useState(new Date());
  const recaptchaRef = useRef(null);
  const form = useRef();
  const [notification] = useNotify();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const handleClick = () => {
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
        emailjs.sendForm('service_8pof0qh', 'template_tx2orac', form.current, '9cidPWVw6ZjMK7J4e')
          .then(() => {
            setLoading(false);
            notification('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
            reset();
          }, () => {
            setLoading(false); notification('error', '¡Mensaje no enviado, por favor intentalo de nuevo!');
          });
      } else {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.log('error', error?.message);
    } finally {
      recaptchaRef.current.reset();
    }
  };

  return (
    <form ref={form} className="form" onSubmit={handleSubmit(handleClick)}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="destiny" value={type === 'Denuncias' ? process.env.NEXT_PUBLIC_DENUNCIAS_EMAIL : process.env.NEXT_PUBLIC_CONTACTO_EMAIL} />
      <div className="form-group">
        <h4 className="py-2">Mantener el anonimato</h4>
        <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="inlineRadio1">
            <span className={styles.formLabel}>
              Si
            </span>
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
            <span className={styles.formLabel}>
              No
            </span>
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
          <div className="form-group pt-3">
            <label htmlFor="username" className="form-label w-100">
              <span className={styles.formLabel}>
                Nombre y Apellido
              </span>
              <input
                type="text"
                className={`${styles.formInput} ${errors.username ? styles.formInputError : ''} form-control mt-2`}
                name="username"
                placeholder="Introduce un nombre completo"
                {...register('username')}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label w-100 position-relative">
              <span className={styles.formLabel}>
                Email
              </span>
              <input
                type="email"
                className={`${styles.formInput} ${errors.email ? styles.formInputError : ''} form-control mt-2`}
                name="email"
                placeholder="Introduce tu email"
                {...register('email')}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="form-label w-100 position-relative">
              <span className={styles.formLabel}>
                Teléfono
              </span>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">+56</span>
                </div>
                <input
                  type="text"
                  className={`${styles.formInput} ${errors.phone ? styles.formInputError : ''} form-control`}
                  name="phone"
                  placeholder="Introduce tu teléfono"
                  {...register('phone')}
                />
              </div>
            </label>
          </div>
        </>
      )}
      <div className="form-group row">
        <h4 className="py-4">Detalles del incidente</h4>
        <div className="col-lg-6">
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
            {errors?.mensaje?.type === 'required' && 'Fecha del incidente requerida'}
          </span>
        </div>
        <div className="col-lg-6">
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
                options={optionList.map((item) => ({ label: item, value: item }))}
                {...field}
                defaultValue={{ label: optionList[0], value: optionList[0] }}
              />
            )}
          />
          <span className={styles.formInputSpanError}>
            {errors?.mensaje?.type === 'required' && 'Tipo de delito requerido'}
          </span>
        </div>
      </div>
      <div className="form-group pt-4">
        <label htmlFor="mensaje" className="form-label w-100 position-relative">
          <span className={styles.formLabel}>
            Mensaje de Denuncia
          </span>
          <textarea
            className={`${styles.formTextArea} form-control mt-2`}
            name="mensaje"
            rows="4"
            placeholder="Descripción breve y clara del hecho que se denuncia, incluye los nombres de la (s) persona (s) involucrada (s) en los hechos denunciados"
            {...register('mensaje', {
              required: true,
              maxLength: 9,
              minLength: 9,
            })}
          />
          <span className={styles.formInputSpanError}>
            {errors?.mensaje?.type === 'required' && 'Denuncia requerida'}
          </span>
        </label>
      </div>
      <div className="form-group">
        <Button
          className="btn btn-complementary mt-4 text-uppercase py-2 px-4"
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
