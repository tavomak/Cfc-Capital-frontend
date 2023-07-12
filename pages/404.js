import Image from 'next/image';
import Link from 'next/link';
import Layout from '@components/Templates/Layout';

const FourOhFour = () => (
  <Layout
    title="Contenido no encontrado"
  >
    <div className="row justify-content-center align-items-center content-wrapper">
      <div className="col-lg-5">
        <div className="text-center">
          <Image
            src="/404.png"
            alt="Cfc Capital Logo"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-5 text-center">
          <Link href="/">
            <a href="!#" className="btn btn-complementary btn-sm shadow px-5 py-2">
              Volver al sitio
            </a>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default FourOhFour;
