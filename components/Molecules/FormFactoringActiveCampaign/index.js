import { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { format } from 'rut.js';
import { PatternFormat } from 'react-number-format';
import { validateRut } from '@utils/index';
import useNotify from '@hooks/useNotify';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from '@components/Atoms/Button';

const FormFactoringActiveCampaign = ({ setModal }) => {
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [notification] = useNotify();
  const form = useRef();
  const recaptchaRef = useRef(null);

  const {
    register,
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const sendToActiveCampaign = async () => {
    const isRutValid = validateRut(form.current.rut.value);

    if (!isRutValid) {
      setError('rut', {
        type: 'custom',
        message: 'Rut invalido',
      });
      setLoading(false);
      setBtnDisabled(false);
      return;
    }

    const formData = new FormData();

    formData.append('u', '31');
    formData.append('f', '31');
    formData.append('s', '');
    formData.append('c', '0');
    formData.append('m', '0');
    formData.append('act', 'sub');
    formData.append('v', '2');
    formData.append('or', 'e8d640a2ac60191dfcefaff5e47a8bca');

    formData.append('firstname', form.current.firstname.value);
    formData.append('lastname', form.current.lastname.value);
    formData.append('email', form.current.email.value);
    formData.append('phone', form.current.phone.value);
    formData.append('field[6]', form.current.mensaje.value);
    formData.append('field[8]', isRutValid);

    await fetch('https://cfccapitalcl.activehosted.com/proc.php?id=31', {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json()).catch(() => false);
  };
  const onSubmit = () => {
    setLoading(true);
    setBtnDisabled(true);
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
        const userCreated = sendToActiveCampaign();
        if (userCreated) {
          notification('success', '¡Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo!');
          reset();
          setModal(false);
        }
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log('error', error?.message);
      reset();
      notification('error', '¡Mensaje no enviado, por favor inténtalo de nuevo más tarde!');
    } finally {
      recaptchaRef.current.reset();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={form}
    >
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onReCAPTCHAChange}
      />
      <div className="row">

        <div className="col-md-6 form-group">
          <label htmlFor="firstname" className="form-label w-100">
            <p className="mb-2">
              Nombre
              <span className="text-danger"> *</span>
            </p>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder=""
              data-name="firstname"
              {...register('firstname', {
                required: true,
              })}
            />
            {errors.firstname && (
            <span className="text-danger">
              Por favor ingresa un nombre
            </span>
            )}
          </label>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="lastname" className="form-label w-100">
            <p className="mb-2">
              Apellido
              <span className="text-danger"> *</span>
            </p>
            <input
              type="text"
              className="form-control"
              id="lastname"
              data-name="lastname"
              {...register('lastname', {
                required: true,
              })}
            />
            {errors.firstname && (
            <span className="text-danger">
              Por favor ingresa un apellido
            </span>
            )}
          </label>
        </div>

        <div className="form-group my-3">
          <label htmlFor="email" className="form-label w-100">
            <p>
              Correo electrónico
              <span className="text-danger"> *</span>
            </p>
            <input
              type="email"
              className="form-control"
              id="email"
              data-name="email"
              {...register('email', {
                required: true,
              })}
            />
            {errors.email && (
            <span className="text-danger">
              Por favor ingresa un email válido
            </span>
            )}
          </label>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="rut" className="form-label w-100">
            <p className="mb-2">
              RUT
              <span className="text-danger"> *</span>
            </p>
            <Controller
              control={control}
              name="rut"
              rules={{ required: true }}
              render={({ field: { onChange, name, value } }) => (
                <input
                  type="text"
                  className="form-control"
                  name={name}
                  value={value && format(value)}
                  onChange={onChange}
                />
              )}
            />
            {errors.rut && (
            <span className="text-danger">
              Por favor ingresa un Rut válido
            </span>
            )}
          </label>
        </div>

        <div className="col-md-6 form-group">
          <label htmlFor="phone" className="form-label w-100">
            <p className="mb-2">
              Teléfono
              <span className="text-danger"> *</span>
            </p>
            <Controller
              control={control}
              name="phone"
              rules={{ required: true }}
              render={({ field: { onChange, name, value } }) => (
                <PatternFormat
                  format="+56 (#) #### ####"
                  name={name}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                />
              )}
            />
            {errors.phone && (
            <span className="text-danger">
              Por favor ingresa un teléfono válido
            </span>
            )}
          </label>
        </div>

        <div className="form-group my-3">
          <label htmlFor="mensaje" className="form-label w-100">
            <p className="mb-2">
              ¿Quieres dejarnos algún mensaje?
            </p>
            <textarea
              id="field[6]"
              name="mensaje"
              placeholder=""
              data-name="quieres_dejarnos_algun_mensaje"
              className="form-control"
              {...register('mensaje', {
                required: false,
              })}
            />
          </label>
        </div>

        <div className="row">
          <div className="col-12 text-center py-4">
            <Button
              className={`btn btn-primary ${btnDisabled ? 'disabled' : ''} px-md-5`}
              text="Enviar"
              submit
              loading={loading}
              disabled={btnDisabled}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormFactoringActiveCampaign;
