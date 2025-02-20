import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Templates/Layout';

const FourOhFour = () => (
  <Layout title="Contenido no encontrado">
    <div className="flex justify-center">
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
          <Link href="/" className="px-5 py-2 shadow btn btn-gray">
            Volver al sitio
          </Link>
        </div>
      </div>
    </div>
  </Layout>
);

export default FourOhFour;
