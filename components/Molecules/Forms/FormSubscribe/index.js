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
            email: form.subscribeEmail,
            tag: 'Sitio Web Newsletter',
          },
        }),
      };

      const activeResponse = await fetch('/api/zoho', options);
      const data = await activeResponse.json();

      if (data.error) if (data.error) throw new Error(data);

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
    <form className="mt-8 lg:px-4 lg:mt-0" onSubmit={handleSubmit(handleClick)}>
      <div className="flex flex-col form-group">
        <p className="text-sm font-semibold">
          Introduce tu email para recibir nuestras noticias.
        </p>
        <Input
          type="email"
          name="subscribeEmail"
          placeholder="Introduce tu email"
          rules={{
            required: 'Email Requerido',
          }}
          errors={errors.subscribeEmail}
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
