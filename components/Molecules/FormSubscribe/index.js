import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import useNotify from '@hooks/useNotify';
import Button from '@components/Atoms/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './styles.module.scss';

const FormSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const form = useRef();
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
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
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
        // If the response is ok than show the success alert
        // alert("Email registered successfully");
        emailjs.sendForm('service_8pof0qh', 'template_tx2orac', form.current, '9cidPWVw6ZjMK7J4e')
          .then(() => {
            setLoading(false);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useNotify('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
            reset();
          }, (error) => {
            setLoading(false);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useNotify('error', '¡Mensaje no enviado, por favor intentalo de nuevo!');
            console.log(error);
          });
      } else {
        // Else throw an error with the message returned
        // from the API
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.log('error', error?.message);
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
      // setEmail("");
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
        <Button
          className="btn btn-secondary mt-4 text-uppercase py-2 px-4"
          text="Ingresar"
          loading={loading}
          submit
        />
      </div>
    </form>
  );
};

export default FormSubscribe;
