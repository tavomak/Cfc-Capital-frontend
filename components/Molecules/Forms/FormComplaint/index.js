import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { environments } from '@/utils/constants';
import ReCAPTCHA from 'react-google-recaptcha';
import TagManager from 'react-gtm-module';
import emailjs from '@emailjs/browser';
import useNotify from '@/hooks/useNotify';
import Button from '@/components/Atoms/Button';
import Input from '@/components/Atoms/Input';

const styles = {};

const tagManagerArgs = {
  dataLayer: {
    event: 'denuncia',
  },
};
const FormComplaint = ({ target }) => {
  const [loading, setLoading] = useState(false);
  const [selectionMessage, setSelectionMessage] = useState({
    name: 'seleccionar',
    errorMsg: false,
  });
  const recaptchaRef = useRef(null);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [notification] = useNotify();

  const handleClick = () => {
    setLoading(true);
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    if (form.current.selectLeasing === 'seleccionar') {
      setSelectionMessage({
        name: 'seleccionar',
        errorMsg: 'Debe seleccionar una opción',
      });
      return;
    }
    const templateParams = {
      service: 'Formulario de denuncia Ley Karin | Sitio web CFC',
      username: form.current.lastName.value,
      email: form.current.email.value,
      telefono: form.current.telefono.value,
      mensaje: `
      Fecha de denuncia: ${new Date().toLocaleDateString('es-CL')}
      Relación con CFC: ${form.current.selectLeasing.value}
      Nombre del denunciado: ${form.current.lastName.value}
      Mensaje: ${form.current.message.value}`,
      email_target: target,
      reply_to: form.current.email.value,
    };
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_SERVICES_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              notification(
                'success',
                'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.'
              );
              if (process.env.NODE_ENV === environments.production) {
                TagManager.dataLayer(tagManagerArgs);
              }
              reset();
            },
            () => {
              setLoading(false);
              notification(
                'error',
                '¡Mensaje no enviado, por favor inténtalo de nuevo!'
              );
            }
          );
      } else {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.log('error', error);
      notification(
        'error',
        '¡Mensaje no enviado, por favor inténtalo de nuevo!'
      );
    } finally {
      recaptchaRef.current.reset();
    }
  };

  const handleSelect = (e) => {
    if (e.target.value === 'seleccionar') {
      setSelectionMessage({
        name: 'seleccionar',
        errorMsg: 'Debe seleccionar una opción',
      });
    }
  };

  return (
    <form ref={form} className="mb-5 form" onSubmit={handleSubmit(handleClick)}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="hidden">
        <input type="hidden" name="target_email" value={target} />
      </div>

      <h2 className="mb-4 text-xl font-semibold text-soft-blue">
        Fecha de denuncia: {new Date().toLocaleDateString('es-CL')}
      </h2>

      <label
        htmlFor="selectLeasing"
        className="flex items-center justify-between w-full"
      >
        <span className={styles.formLabel}>
          ¿Cual es tu relación con CFC Capital?
        </span>
        <select
          className="px-4 py-2 border border-gray-200 rounded-md"
          aria-label="¿Deseas leasing habitacional?"
          name="selectLeasing"
          onChange={(e) => handleSelect(e)}
        >
          <option defaultValue value="seleccionar">
            Seleccionar una opción
          </option>
          <option value="cliente">Cliente</option>
          <option value="colaborador">Colaborador</option>
          <option value="proveedor">Proveedor</option>
        </select>
        {selectionMessage.errorMsg && (
          <span className={styles.formInputSpanError}>
            {selectionMessage.errorMsg}
          </span>
        )}
      </label>

      <div className="form-group">
        <Input
          type="text"
          className={`${styles.formInput} ${errors.username ? styles.formInputError : ''} form-control mt-2`}
          name="username"
          placeholder="Introduce el Nombre de la persona que quieres denunciar"
          errors={errors.username}
          register={register}
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          className={`${styles.formInput} ${errors.lastName ? styles.formInputError : ''} form-control mt-2`}
          name="lastName"
          placeholder="Introduce tu nombre y apellido"
          errors={errors.lastName}
          register={register}
        />
      </div>
      <div className="form-group">
        <Input
          type="email"
          className={`${styles.formInput} ${errors.email ? styles.formInputError : ''} form-control mt-2`}
          name="email"
          placeholder="Introduce tu email"
          errors={errors.email}
          register={register}
        />
      </div>

      <div className="form-group">
        <Input
          type="text"
          phone
          className={`${styles.formInput} ${errors.telefono ? styles.formInputError : ''} form-control`}
          name="telefono"
          placeholder="Introduce tu teléfono"
          errors={errors.telefono}
          register={register}
          rules={{
            required: 'Teléfono Requerido',
            maxLength: 9,
            minLength: 9,
          }}
        />
      </div>

      <div className="form-group">
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
            Describe la situación que quieres reportar
          </span>
        </label>
      </div>
      <div className="text-center form-group">
        <Button
          className="px-4 py-2 mt-4 btn btn-primary text-uppercase"
          text="Enviar"
          loading={loading}
          submit
        />
      </div>
    </form>
  );
};

export default FormComplaint;
