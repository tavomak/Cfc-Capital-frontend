import Image from 'next/image';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import ClientsIcon from '@/components/Atoms/ClientsIcon';
import StarIcon from '@/components/Atoms/StarIcon';
import DolarIcon from '@/components/Atoms/DolarIcon';

import { getTeamMembers, highlights } from '@/utils';
import Layout from '@/components/Templates/Layout';
import Link from 'next/link';
import StepCard from '@/components/Molecules/StepCard';

const iconsMapping = {
  star: <StarIcon />,
  people: <ClientsIcon />,
  money: <DolarIcon />,
};

const cld = new Cloudinary({
  cloud: {
    cloudName: 'deevr9k54',
  },
});

// Use the video with public ID, 'docs/walking_talking'.
const myVideo = cld.video('video-nosotros-CFC-hd_quu4iy_qdqwzy');

const cfc = ({ data }) => {
  const { directors, managers, team } = data;
  return (
    <Layout
      title="Somos CFC"
      description="Somos una empresa de servicios financieros, presente en el mercado desde el año 2003"
    >
      <section className="container flex flex-wrap mx-auto md:px-4">
        <AdvancedVideo
          cldVid={myVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-servicios.jpg"
        />
      </section>
      <section className="container max-w-5xl py-10 mx-auto my-10 md:px-4">
        <article className="md:flex">
          {highlights.map((item) => (
            <StepCard
              key={item.title}
              name={item.title}
              icon={iconsMapping[item.icon]}
              description={item.description}
            />
          ))}
        </article>
        <div className="w-full py-10 text-center">
          <Link href="/memorias" className="btn btn-gray">
            Ver memorias
          </Link>
        </div>
      </section>
      {managers?.length > 0 &&
        managers.map((item, index) => (
          <section
            id="gerencia"
            className={`md:py-12 ${
              (index + 1) % 2 === 0
                ? 'bg-primary-gradient-grey'
                : 'bg-secondary-gradient-grey'
            }`}
            key={item.name}
          >
            <div className="container mx-auto md:px-4">
              <div className="items-center md:flex">
                <div
                  className={`md:w-1/2 ${
                    (index + 1) % 2 === 0 ? 'order-last' : 'order-first'
                  }`}
                >
                  <div className="hidden md:block">
                    <Image
                      src={item.photo[0].url}
                      alt={item.name}
                      width={640}
                      height={390}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                  <div className="md:hidden">
                    <Image
                      src={item.photo[1].url}
                      alt={item.name}
                      width={640}
                      height={390}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    (index + 1) % 2 === 0 ? 'order-first' : 'order-last'
                  }`}
                >
                  <div className="py-6 text-center md:px-12 md:text-left">
                    <h1 className="display-font text-2xl font-bold text-dark-blue md:text-4xl">
                      {item.name}
                    </h1>
                    <span className="inline-block h-0.5 w-20 bg-dark-blue my-2 md:my-4" />
                    <h2 className="mb-0 text-dark-blue md:text-lg">
                      {item.position}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      <section className="flex justify-center mt-6 md:py-12 md:mt-12">
        <div className="text-center text-dark-blue">
          <h2 className="display-font text-3xl font-bold md:text-4xl">
            Equipo Comercial
          </h2>
          <p className="px-2 text-medium-grey text-lg md:text-2xl">
            <span className="font-bold">Más que ejecutivos </span>
            somos un equipo humano dispuestos a ser parte de tu empresa.
          </p>
          <p className="text-medium-grey text-lg md:text-2xl">
            Porque sabemos que eres el motor de la economía.
          </p>
        </div>
      </section>

      <section className="container flex flex-wrap mx-auto md:px-4">
        {team?.length > 0 &&
          team.map((item) => (
            <div key={item.name} className="px-2 py-6 mb-4 md:w-1/3 md:px-12">
              <div className="mb-3 px-md-5">
                <div className="overflow-hidden team-img rounded-3xl">
                  <Image
                    src={item.photo[0].url}
                    alt={item.name}
                    width={1000}
                    height={1361}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    priority
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold display-font text-purple md:text-xl">
                  {item.name}
                </p>
                <p className="font-bold text-medium-gray">{item.position}</p>
                <a
                  href={`mailto:${item.email}`}
                  className="text-medium-gray"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.email}
                </a>
              </div>
            </div>
          ))}
      </section>

      <section className="py-12 mt-12 bg-primary-gradient-grey">
        <h2 className="mb-12 text-2xl font-bold text-center text-blue">
          Directorio
        </h2>
        <article className="container flex flex-wrap justify-center mx-auto md:px-4">
          {directors?.length > 0 &&
            directors.map((item) => (
              <div key={item.name} className="px-12 py-6 mb-4 md:w-1/3">
                <div className="mb-3 px-md-5">
                  <div className="overflow-hidden team-img rounded-3xl">
                    <Image
                      src={item.photo[0].url}
                      alt={item.name}
                      width={1000}
                      height={1361}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      priority
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold display-font text-blue md:text-xl">
                    {item.name}
                  </p>
                  <p className="text-medium-gray">{item.position}</p>
                </div>
              </div>
            ))}
        </article>
      </section>
    </Layout>
  );
};

export default cfc;

export async function getStaticProps() {
  try {
    const { data } = await getTeamMembers('home');
    return {
      props: {
        data: data?.teams[0],
      },
      revalidate: 100,
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return {
      notFound: true,
    };
  }
}
