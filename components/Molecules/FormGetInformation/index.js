import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import useNotify from 'hooks/useNotify';
import Button from 'components/Atoms/Button';
import ReCAPTCHA from "react-google-recaptcha";
import TagManager from 'react-gtm-module';
import styles from './styles.module.scss';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM,
  events: {
    conversion: {
      send_to: 'AW-10800512963/O9OaCOSdxIIYEMP_ip4o',
    }
  }
}

const FormGetInfo = ({service, title, image, content}) => {
  const [loading, setLoading] = useState(false);
  const [isLeasing, setLeasing] = useState(false);
  const [leasingHab, setLeasingHab] = useState({name: 'seleccionar', errorMsg: false});
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
    if (isLeasing && leasingHab.name !== 'no') {
      setLoading(false);
      return
    }
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        emailjs.sendForm('service_8pof0qh', 'template_2rrh5ia', form.current, '9cidPWVw6ZjMK7J4e')
        .then((result) => {
          setLoading(false);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useNotify('success', 'Hemos recibido tu mensaje. Un ejecutivo se comunicará contigo brevemente.');
          reset();
          TagManager.initialize(tagManagerArgs);
        }, (error) => {
          setLoading(false);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useNotify('error', '¡Mensaje no enviado, por favor intentalo de nuevo!');
        });
      } else {
        const error = await response.json();
        console.log(error);
        throw new Error(error.message)
      }
    } catch (error) {
      alert('error', error?.message );
    } finally {
      recaptchaRef.current.reset();
    }
  };

  const handleSelect = (e) => {
    if (e.target.value === 'si') {
      setLeasingHab({
        name: 'si',
        errorMsg: '😢 No trabajamos con Leasing Habitacional'
      })
    }
    if (e.target.value === 'seleccionar') {
      setLeasingHab({
        name: 'seleccionar',
        errorMsg: 'Debe seleccionar una opción'
      })
    }
    if (e.target.value === 'no') {
      setLeasingHab({name: 'no', errorMsg: null});
    }
  }

  useEffect(() => {
    if (service === 'Leasing') {
      setLeasing(true);
    } else {
      setLeasing(false);
    }
  }, [service])
  
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
          <span className={`${styles.formLabel}`}>
            ¿Deseas leasing habitacional?
          </span>
          <select
            className={`form-select ${styles.formInput} my-2`}
            aria-label="¿Deseas leasing habitacional?"
            name="selectLeasing"
            onChange={e => handleSelect(e)}
          >
            <option defaultValue value="seleccionar">Seleccionar una opción</option>
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
          {leasingHab.errorMsg && (
            <span className={`${styles.formInputSpanError}`}>
              {leasingHab.errorMsg}
            </span>
          )}
        </label>
      )}
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
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">+56</span>
            </div>
            <input
              type="text"
              className={`${styles.formInput} ${errors.telefono ? styles.formInputError : ''} form-control`}
              name="telefono"
              placeholder="Introduce tu teléfono"
              {...register('telefono', {
                required: true,
                maxLength: 9,
                minLength: 9,
              })}
            />
          </div>
            <span className={`${styles.formInputSpanError}`}>
              {errors?.telefono?.type === 'required' && 'Teléfono Requerido'}
              {errors?.telefono?.type === 'minLength' && 'Debe tener 9 digitos'}
              {errors?.telefono?.type === 'maxLength' && 'Debe tener 9 digitos'}
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
            name="mensaje"
            rows="4"
            placeholder="Introduce tu mensaje"
            {...register('mensaje')}
          />
        </label>
      </div>
      <div className="form-group">
        <Button
          className="btn btn-secondary mt-4 text-uppercase py-2 px-4"
          text="Enviar"
          loading={loading}
          submit
          disabled={leasingHab.name === 'si'}
        />
      </div>
    </form>
  );
}
 
export default FormGetInfo;