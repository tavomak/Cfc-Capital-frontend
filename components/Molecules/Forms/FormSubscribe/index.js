import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@/components/Atoms/Button';
import Input from '@/components/Atoms/Input';
import useNotify from '@/hooks/useNotify';

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

      const activeResponse = await fetch('/api/zoho', options);
      const data = await activeResponse.json();

      if (data.error) {
        setLoading(false);
        notification(
          'error',
          '¡Upps... No hemos podido enviar tu mensaje, por favor inténtalo de nuevo!'
        );
      }

      setLoading(false);
      notification(
        'success',
        'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.'
      );
      reset();
    } catch (error) {
      notification(
        'error',
        '¡Upps... No hemos podido enviar tu mensaje, por favor inténtalo de nuevo!'
      );
      setLoading(false);
    }
  };

  return (
    <form className="px-4" onSubmit={handleSubmit(handleClick)}>
      <div className="form-group flex flex-col">
        <p className="text-sm font-semibold">
          Introduce tu email para recibir nuestras noticias.
        </p>
        <Input
          type="email"
          name="email"
          placeholder="Introduce tu email"
          rules={{
            required: 'Email Requerido',
          }}
          errors={errors.email}
          register={register}
        />
        <div className="ms-auto">
          <Button
            className="btn btn-gray"
            text="Enviar"
            submit
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default FormSubscribe;
