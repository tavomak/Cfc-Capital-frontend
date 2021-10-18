import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import useNotify from 'hooks/useNotify';
import Button from 'components/Atoms/Button';
import styles from './styles.module.scss'

const FormContact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClick = () => {
    setLoading(true);
    emailjs.sendForm('service_gejcgfb', 'template_1qns8vv', form.current, 'user_wfzYCDVa6rjF3mPxCIWiT')
    .then((result) => {
      setLoading(false);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useNotify('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
      reset();
    }, (error) => {
      setLoading(false);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useNotify('error', '¡Mensaje no enviado, por favor intentalo de nuevo!');
    });
  };

  return (
    <form ref={form} className="form" onSubmit={handleSubmit(handleClick)}>
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
          <input
            type="text"
            className={`${styles.formInput} ${errors.telefono ? styles.formInputError : ''} form-control mt-2`}
            name="telefono"
            placeholder="Introduce tu teléfono"
            {...register('telefono', {
              required: true,
            })}
          />
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
            name="message"
            rows="4"
            placeholder="Introduce tu teléfono"
            {...register('mensaje')}
          />
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
}
 
export default FormContact;