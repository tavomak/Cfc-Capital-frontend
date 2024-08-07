import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import TagManager from 'react-gtm-module';
import emailjs from 'emailjs-com';
import useNotify from '@hooks/useNotify';
import Button from '@components/Atoms/Button';
import styles from './styles.module.scss';

const tagManagerArgs = {
  dataLayer: {
    event: 'denuncia',
  },
};

const FormComplaint = ({
  target,
}) => {
  const [loading, setLoading] = useState(false);
  const [selectionMessage, setSelectionMessage] = useState({ name: 'seleccionar', errorMsg: false });
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
    const templateParams ={
      service: 'Formulario de denuncia Ley Karin | Sitio web CFC',
      username: form.current.lastName.value,
      email: form.current.email.value,
      telefono: form.current.telefono.value,
      mensaje: `
      Relación con CFC: ${form.current.selectLeasing.value}
      Nombre del denunciado: ${form.current.lastName.value}
      Mensaje: ${form.current.mensaje.value}`,
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
        emailjs.send('service_8pof0qh', 'template_2rrh5ia', templateParams, '9cidPWVw6ZjMK7J4e')
          .then(() => {
            setLoading(false);
            notification('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
            TagManager.dataLayer(tagManagerArgs);
            reset();
          }, () => {
            setLoading(false); notification('error', '¡Mensaje no enviado, por favor inténtalo de nuevo!');
          });
      } else {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.log('error', error);
      notification('error', '¡Mensaje no enviado, por favor inténtalo de nuevo!');
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
    <form ref={form} className="form mb-5" onSubmit={handleSubmit(handleClick)}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="d-none">
        <input type="hidden" name="target_email" value={target} />
      </div>

      <label htmlFor="selectLeasing" className="form-label w-100">
        <span className={styles.formLabel}>
          ¿Cual es tu relación con CFC Capital?
        </span>
        <select
          className={`form-select ${styles.formInput} my-2`}
          aria-label="¿Deseas leasing habitacional?"
          name="selectLeasing"
          onChange={(e) => handleSelect(e)}
        >
          <option defaultValue value="seleccionar">Seleccionar una opción</option>
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
        <label htmlFor="username" className="form-label w-100">
          <span className={styles.formLabel}>
            Nombre del denunciado
          </span>
          <input
            type="text"
            className={`${styles.formInput} ${errors.username ? styles.formInputError : ''} form-control mt-2`}
            name="username"
            placeholder="Introduce el Nombre de la persona que quieres denunciar"
            {...register('username', {
              required: true,
            })}
          />
          <span className={styles.formInputSpanError}>
            {errors.username ? 'Nombre requerido' : ''}
          </span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="form-label w-100">
          <span className={styles.formLabel}>
            Nombre del denunciante
          </span>
          <input
            type="text"
            className={`${styles.formInput} ${errors.lastName ? styles.formInputError : ''} form-control mt-2`}
            name="lastName"
            placeholder="Introduce tu nombre y apellido"
            {...register('lastName', {
              required: true,
            })}
          />
          <span className={styles.formInputSpanError}>
            {errors.lastName ? 'Apellido requerido' : ''}
          </span>
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
            {...register('email', {
              required: true,
            })}
          />
          <span className={styles.formInputSpanError}>
            {errors.email ? 'Email Requerido' : '' }
          </span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="telefono" className="form-label w-100 position-relative">
          <span className={styles.formLabel}>
            Teléfono
          </span>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">+56</span>
            </div>
            <input
              type="text"
              className={`${styles.formInput} ${errors.telefono ? styles.formInputError : ''} form-control`}
              name="telefono"
              placeholder="Introduce tu teléfono"
              {...register('telefono', {
                required: true,
                maxLength: 9,
                minLength: 9,
              })}
            />
          </div>
          <span className={styles.formInputSpanError}>
            {errors?.telefono?.type === 'required' && 'Teléfono Requerido'}
            {errors?.telefono?.type === 'minLength' && 'Debe tener 9 digitos'}
            {errors?.telefono?.type === 'maxLength' && 'Debe tener 9 digitos'}
          </span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="mensaje" className="form-label w-100 position-relative">
          <span className={styles.formLabel}>
            Describe la situación que quieres reportar
          </span>
          <textarea
            className={`${styles.formTextArea} form-control mt-2`}
            name="mensaje"
            rows="4"
            placeholder="Introduce tu mensaje"
            {...register('mensaje')}
          />
        </label>
      </div>
      <div className="form-group text-center">
        <Button
          className="btn btn-primary mt-4 text-uppercase py-2 px-4"
          text="Enviar"
          loading={loading}
          submit
        />
      </div>
    </form>
  );
};

export default FormComplaint;
