import { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Button from '@components/Atoms/Button';
import FormComplaint from '@components/Molecules/FormComplaint';
import FormLaw from '@components/Molecules/FormLaw';

const Stepper = () => {
  const [step, setStep] = useState(null);
  const [active, setActive] = useState({ karin: false, ley: false });
  const [error, setError] = useState(false);

  const handleStep = (e) => {
    e.preventDefault();
    setError(false);
    if (active.ley) {
      setStep('ley');
      return;
    }
    if (active.karin) {
      setStep('karin');
      return;
    }
    setError(true);
  };
  const handleBack = (e) => {
    e.preventDefault();
    setStep(null);
    setActive({ karin: false, ley: false });
  };
  return (
    <section className="d-flex flex-column justify-content-center shadow px-5">
      {!step && (
        <aside className="d-flex flex-column py-5 my-5 gap-4">
          <p className="display-font fs-5 text-center">Selecciona el tipo de denuncia que quieres realizar</p>
          <Button
            text="Ley 20.393"
            className={`btn btn-${active.ley ? 'complementary' : 'primary'} btn-no--focused`}
            onClick={() => setActive({ ...active, ley: !active.ley, karin: false })}
          />
          <Button
            text="Ley Karin"
            className={`btn btn-${active.karin ? 'complementary' : 'primary'} btn-no--focused`}
            onClick={() => setActive({ ...active, karin: !active.karin, ley: false })}
          />
          <a
            className="mb-0 mt-4"
            href="!#"
            onClick={(e) => handleStep(e)}
          >
            <p className="mb-0 fs-5 text-center">
              <FaArrowAltCircleRight />
              <span className="ps-2">
                <u>
                  Continuar
                </u>
              </span>
            </p>
            <p className={`${error ? 'text-danger' : ''} text-center`}><small>Debes seleccionar el tipo de denuncia para poder continuar.</small></p>
          </a>
        </aside>
      )}
      {step && (
        <a
          className="py-4"
          href="!#"
          onClick={(e) => handleBack(e)}
        >
          <p className="mb-0 fs-5">
            <FaArrowAltCircleLeft />
            <span className="ps-2">
              <u>
                Volver
              </u>
            </span>
          </p>
        </a>
      )}
      {step === 'ley' && !error && <FormLaw />}
      {step === 'karin' && !error && <FormComplaint />}
    </section>
  );
};

export default Stepper;
