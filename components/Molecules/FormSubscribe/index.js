import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@components/Atoms/Button';
import useNotify from '@hooks/useNotify';
import styles from './styles.module.scss';

const FormSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [notification] = useNotify();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleClick = async (form) => {
    setLoading(true);
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          contact: {
            email: form.email,
            tag: 'newsletter',
          },
        }),
      };

      const activeResponse = await fetch('/api/active-campaign', options);
      const data = await activeResponse.json();

      if (data.error) {
        setLoading(false);
        notification('error', '¡Upps... No hemos podido enviar tu mensaje, por favor inténtalo de nuevo!');
      }

      setLoading(false);
      notification('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
      reset();
    } catch (error) {
      notification('error', '¡Upps... No hemos podido enviar tu mensaje, por favor inténtalo de nuevo!');
      setLoading(false);
    }
  };

  return (
    <form className="form row" onSubmit={handleSubmit(handleClick)}>
      <div className="form-group d-flex align-items-center">
        <label htmlFor="email" className="form-label w-100 position-relative">
          <input
            type="email"
            className={`${styles.formInput} ${errors.email ? styles.formInputError : ''} form-control mt-2`}
            name="email"
            placeholder="Introduce tu email"
            {...register('email', {
              required: true,
            })}
          />
        </label>
        <div className={styles.formButton}>
          <Button className="btn btn-complementary" text="Enviar" submit loading={loading} />
        </div>
      </div>
    </form>
  );
};

export default FormSubscribe;
