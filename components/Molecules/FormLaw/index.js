import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import useNotify from '@hooks/useNotify';
import Button from '@components/Atoms/Button';
import styles from './styles.module.scss';

const FormContact = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const form = useRef();
  const [notification] = useNotify();
  const {
    register,
    handleSubmit,
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
            setLoading(false);// eslint-disable-next-line react-hooks/rules-of-hooks
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
      <input type="hidden" name="type" value={type} />
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="form-group">
        <label htmlFor="username" className="form-label w-100">
          <span className={`${styles.formLabel} text-white`}>
            Nombre
          </span>
          <input
            type="text"
            className={`${styles.formInput} ${errors.username ? styles.formInputError : ''} form-control mt-2`}
            name="username"
            placeholder="Introduce un nombre"
            {...register('username')}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label w-100 position-relative">
          <span className={`${styles.formLabel} text-white`}>
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
        <label htmlFor="telefono" className="form-label w-100 position-relative">
          <span className={`${styles.formLabel} text-white`}>
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
              {...register('telefono')}
            />
          </div>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="mensaje" className="form-label w-100 position-relative">
          <span className={`${styles.formLabel} text-white`}>
            Detalle de Denuncia
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
      <div className="form-group">
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
