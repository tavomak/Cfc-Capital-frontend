import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import TagManager from 'react-gtm-module';
import useNotify from '@/hooks/useNotify';
import Button from '@/components/Atoms/Button';
import Input from '@/components/Atoms/Input';

const tagManagerArgs = {
  dataLayer: {
    event: 'regularConversion',
  },
};

const FormContact = ({ service, title, image, content }) => {
  const [loading, setLoading] = useState(false);
  const [isLeasing, setLeasing] = useState(false);
  const [leasingHab, setLeasingHab] = useState({
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
    if (isLeasing && leasingHab.name !== 'no') {
      setLoading(false);
      return;
    }
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
        const options = {
          method: 'POST',
          body: JSON.stringify({
            contact: {
              email: form.current.email.value,
              firstName: form.current.username.value,
              lastName: form.current.lastName.value,
              phone: form.current.telefono.value,
              tag: service?.toLowerCase() || 'contacto',
            },
          }),
        };

        const activeResponse = await fetch('/api/zoho', options);
        const data = await activeResponse.json();

        if (data.error) {
          setLoading(false);
          notification(
            'error',
            '¡Mensaje no enviado, por favor inténtalo de nuevo!'
          );
        }

        setLoading(false);
        notification(
          'success',
          'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.'
        );
        reset();
        TagManager.dataLayer(tagManagerArgs);
      } else {
        const error = await response.json();
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
    if (e.target.value === 'si') {
      setLeasingHab({
        name: 'si',
        errorMsg: '😢 No trabajamos con Leasing Habitacional',
      });
    }
    if (e.target.value === 'seleccionar') {
      setLeasingHab({
        name: 'seleccionar',
        errorMsg: 'Debe seleccionar una opción',
      });
    }
    if (e.target.value === 'no') {
      setLeasingHab({ name: 'no', errorMsg: null });
    }
  };

  useEffect(() => {
    if (service === 'Leasing') {
      setLeasing(true);
    } else {
      setLeasing(false);
    }
  }, [service]);

  return (
    <form ref={form} className="form" onSubmit={handleSubmit(handleClick)}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="d-none">
        <input type="hidden" name="service" value={service} />
        <input type="hidden" name="title" value={title} />
        <input type="hidden" name="image" value={image} />
        <input type="hidden" name="content" value={content} />
      </div>
      {isLeasing && (
        <label htmlFor="selectLeasing" className="form-label w-100">
          <span>¿Deseas leasing habitacional?</span>
          <select
            className="form-select my-2"
            aria-label="¿Deseas leasing habitacional?"
            name="selectLeasing"
            onChange={(e) => handleSelect(e)}
          >
            <option defaultValue value="seleccionar">
              Seleccionar una opción
            </option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          {leasingHab.errorMsg && (
            <span className="text-red-500">{leasingHab.errorMsg}</span>
          )}
        </label>
      )}
      <div className="form-group">
        <Input
          name="name"
          placeholder="Introduce un nombre"
          rules={{
            required: 'Nombre requerido',
          }}
          errors={errors.name}
          register={register}
        />
      </div>
      <div className="form-group">
        <Input
          name="lastName"
          placeholder="Introduce un Apellido"
          rules={{
            required: 'Apellido requerido',
          }}
          errors={errors.lastName}
          register={register}
        />
      </div>
      <div className="form-group">
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
      </div>
      <div className="form-group">
        <Input
          phone
          name="telefono"
          placeholder="Introduce tu teléfono"
          rules={{
            required: 'Teléfono Requerido',
            maxLength: {
              value: 9,
              message: 'Debe tener 9 digitos',
            },
            minLength: {
              value: 9,
              message: 'Debe tener 9 digitos',
            },
          }}
          errors={errors.telefono}
          register={register}
        />
      </div>
      <div className="form-group">
        <label
          htmlFor="message"
          className="rounded relative my-4 block border border-gray-200 shadow-sm pt-4 px-4"
        >
          <textarea
            className="w-full text-sm focus:outline-none focus-visible:outline-none"
            rows="8"
            id="message"
            {...register('message')}
          />
          <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
            Mensaje
          </span>
        </label>
      </div>
      <div className="form-group text-center">
        <Button
          className="btn btn-primary mt-4 text-uppercase py-2 px-4"
          text="Enviar"
          loading={loading}
          loadingType="dots"
          submit
          disabled={leasingHab.name === 'si'}
        />
      </div>
    </form>
  );
};

export default FormContact;
