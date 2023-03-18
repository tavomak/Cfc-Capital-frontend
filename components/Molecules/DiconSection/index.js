import Image from 'next/image';
import Button from '@components/Atoms/Button';

const DiconSection = () => (
  <section className="py-5 bg-secondary-gradient">
    <div className="container">
      <div className="row justify-content-between align-items-center text-center text-lg-start">
        <div className="col-md-6 mb-4 mb-lg-0">
          <Image
            src="/dicon.png"
            alt="Más que ejecutivos"
            layout="responsive"
            objectFit="contain"
            width={500}
            height={500}
          />
        </div>
        <div className="col-md-5">
          <p>Preguntas frecuentes</p>
          <h4 className="text-dark-blue fw-bolder">¿Tienes dicom?</h4>
          <p>
            No te preocupes. Envíanos tu carpeta tributaria y factura emitida,
            {' '}
            nosotros nos encargamos del resto.
          </p>
          <h4 className="text-dark-blue fw-bolder">En sólo horas y sin papeleos</h4>
          <p>
            En CFC Capital puedes abrir una línea y realizar tu primera operación en horas.
          </p>
          {/* <Button
            className="btn btn-primary mt-4 text-uppercase py-2 px-4"
            text="Comenzar"
          /> */}
        </div>
      </div>
    </div>
  </section>
);

export default DiconSection;
