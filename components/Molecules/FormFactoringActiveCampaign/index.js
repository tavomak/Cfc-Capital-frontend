import { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { validate, format, clean } from 'rut.js';
import { PatternFormat } from 'react-number-format';
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

  const sendToActiveCampaign = async function request(data) {
    const cleanRut = clean(data.rut.value);
    const isRutValid = validate(cleanRut);

    if (!isRutValid) {
      setError('rut', {
        type: 'custom',
        message: 'Rut invalido',
      });
      setLoading(false);
      setBtnDisabled(false);
      return;
    }

    const requestData = {
      u: '31',
      f: '31',
      s: '',
      c: '0',
      m: '0',
      act: 'sub',
      v: '2',
      or: 'e8d640a2ac60191dfcefaff5e47a8bca',
      firstname: data.firstname.value,
      lastname: data.lastname.value,
      email: data.email.value,
      phone: data.phone.value,
      'field[6]': data.mensaje.value,
      'field[8]': data.rut.value,
    };

    try {
      const response = await fetch('https://cfccapitalcl.activehosted.com/proc.php?id=31', {
        method: 'POST',
        body: JSON.stringify(requestData),
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.type) {
        const error = await response.json();
        throw new Error(error.message);
      }
      return true;
    } catch (err) {
      throw new Error(err);
    }
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
      const acr = await sendToActiveCampaign(form.current);

      if (response.ok && acr) {
        notification('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
        reset();
        setModal(false);
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      reset();
      notification('error', '¡Mensaje no enviado, por favor inténtalo de nuevo más tarde! (ORC)');
    } finally {
      setLoading(false);
      setBtnDisabled(false);
      recaptchaRef.current.reset();
    }
  };

  const onSubmit = () => {
    setLoading(true);
    setBtnDisabled(true);
    recaptchaRef.current.execute();
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
              render={({
                field: {
                  onChange, name, value, ref,
                },
              }) => (
                <PatternFormat
                  format="+56 (#) #### ####"
                  name={name}
                  value={value}
                  onChange={onChange}
                  className="form-control"
                  inputRef={ref}
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
              data-name="quieres_dejarnos_algún_mensaje"
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
