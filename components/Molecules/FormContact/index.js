import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import TagManager from 'react-gtm-module';
import useNotify from '@hooks/useNotify';
import Button from '@components/Atoms/Button';
import styles from './styles.module.scss';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM,
  events: {
    conversion: {
      send_to: 'AW-10800512963/O9OaCOSdxIIYEMP_ip4o',
    },
  },
};

const FormContact = ({ type }) => {
  const [loading, setLoading] = useState(false);
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
            TagManager.initialize(tagManagerArgs);
          }, (error) => {
            setLoading(false);
            notification('error', '¡Mensaje no enviado, por favor intentalo de nuevo!');
            console.log(error);
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
      <input type="hidden" name="type" value={type} />
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="form-group">
        <label htmlFor="username" className="form-label w-100">
          <span className={`${styles.formLabel}`}>
            Nombre
          </span>
          <input
            type="text"
            className={`${styles.formInput} ${errors.username ? styles.formInputError : ''} form-control mt-2`}
            name="username"
            placeholder="Introduce un nombre"
            {...register('username', {
              required: true,
            })}
          />
          <span className={`${styles.formInputSpanError}`}>
            {errors.username ? 'Nombre requerido' : ''}
          </span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label w-100 position-relative">
          <span className={`${styles.formLabel}`}>
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
          <span className={`${styles.formInputSpanError}`}>
            {errors.email ? 'Email Requerido' : '' }
          </span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="telefono" className="form-label w-100 position-relative">
          <span className={`${styles.formLabel}`}>
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
              })}
            />
          </div>
          <span className={`${styles.formInputSpanError}`}>
            {errors.telefono ? 'Teléfono Requerido' : ''}
          </span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="mensaje" className="form-label w-100 position-relative">
          <span className={`${styles.formLabel}`}>
            Mensaje
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
          className="btn btn-complementary mt-4 text-uppercase py-2 px-4"
          text="Ingresar"
          loading={loading}
          submit
        />
      </div>
    </form>
  );
};

export default FormContact;
