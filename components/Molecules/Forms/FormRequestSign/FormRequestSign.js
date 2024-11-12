import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { getUserByEmail } from '@/utils';
import useNotify from '@/hooks/useNotify';
import ReCAPTCHA from 'react-google-recaptcha';

import Button from '@/components/Atoms/Button';
import Input from '@/components/Atoms/Input';

const getUserData = async (email) => {
  const {
    data: {
      teams: [{ managers, workers, team }],
    },
  } = await getUserByEmail(email);

  const userGroups = [managers, workers, team];
  if (userGroups.length === 0) return undefined;

  const firstNonEmptyGroup = userGroups.find((group) => group?.length > 0);

  return firstNonEmptyGroup ? { ...firstNonEmptyGroup[0] } : undefined;
};

const FormRequestSign = ({ setData }) => {
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const form = useRef();
  const [notification] = useNotify();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
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
        const user = await getUserData(form.current.email.value);
        if (!user) {
          notification('error', 'Usuario no encontrado');
          setLoading(false);
          return;
        }
        setData({ user });
        setLoading(false);
      } else {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message);
      }
    } catch (error) {
      console.log('error', error?.message);
      notification('error', '¡Oh! algo salió mal, inténtalo de nuevo');
    } finally {
      recaptchaRef.current.reset();
    }
  };
  return (
    <form
      ref={form}
      className="min-w-[350px]"
      onSubmit={(e) => handleSubmit(handleFormSubmit(e))}
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <Input
        type="email"
        className="form-control"
        placeholder="Email"
        name="email"
        rules={{
          required: 'Email Requerido',
        }}
        errors={errors.email}
        register={register}
      />
      <Button className="btn btn-primary" submit loading={loading}>
        Enviar
      </Button>
    </form>
  );
};

export default FormRequestSign;
