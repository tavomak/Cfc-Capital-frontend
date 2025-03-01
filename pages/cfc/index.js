import Image from 'next/image';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import ClientsIcon from '@/components/Atoms/ClientsIcon';
import StarIcon from '@/components/Atoms/StarIcon';
import DolarIcon from '@/components/Atoms/DolarIcon';

import { getTeamMembers } from '@/utils';
import Layout from '@/components/Templates/Layout';
import Link from 'next/link';
import StepCard from '@/components/Molecules/StepCard';
import TeamCard from '@/components/Molecules/TeamCard';
import Card from '@/components/Atoms/Card';

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
  const { directors, managers, team, subManager, highlights } = data;
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

      <section className="container max-w-5xl mx-auto mt-6 md:py-12 md:mt-12">
        <div className="w-full mx-auto text-center md:w-1/2 text-balance text-dark-blue">
          <h2 className="mb-8 text-3xl font-bold display-font md:text-4xl">
            Tenemos la experiencia para enfrentar el futuro
          </h2>
        </div>
        <article className="mt-8 md:flex">
          {highlights.map((item) => (
            <Card
              containerClassName="w-3/4 sm:w-full mx-auto px-4 py-4 md:py-0"
              cardClassName="px-4 py-4 sm:py-12 shadow-lg"
              key={item.title}
            >
              <StepCard
                name={item.title}
                icon={iconsMapping[item.icon]}
                description={item.description}
              />
            </Card>
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
                      src={item.photo[0].url}
                      alt={item.name}
                      width={640}
                      height={390}
                      style={{
                        width: '100%',
                        height: 'auto',
                        marginTop: '3rem',
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    (index + 1) % 2 === 0 ? 'order-first' : 'order-last'
                  }`}
                >
                  <div className="p-6 text-left">
                    <h1 className="text-xl font-bold display-font text-dark-blue md:text-4xl">
                      {item.name}
                    </h1>
                    <h2 className="mb-0 text-xl text-dark-grey">
                      {item.position}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      <section className="container px-4 py-20 mx-auto bg-gradient-to-r from-white to-soft-blue-light">
        <h2 className="mb-12 text-2xl font-bold text-center display-font md:text-4xl text-dark-blue">
          Gerencia
        </h2>
        <article className="container flex flex-wrap justify-center mx-auto md:px-4">
          {subManager?.length > 0 &&
            subManager.map((item) => (
              <TeamCard key={item.name} {...item} photo={item.photo[0].url} />
            ))}
        </article>
      </section>

      <section className="container px-4 py-20 mx-auto">
        <div className="text-center text-dark-blue">
          <h2 className="mb-8 text-3xl font-bold display-font md:text-4xl">
            Equipo Comercial
          </h2>
          <p className="px-2 text-lg text-medium-grey md:text-2xl">
            <span className="font-bold">Más que ejecutivos </span>
            somos un equipo humano dispuestos a ser parte de tu empresa.
          </p>
          <p className="text-lg text-medium-grey md:text-2xl">
            Porque sabemos que eres el motor de la economía.
          </p>
        </div>
        <article className="container flex flex-wrap justify-center mx-auto md:px-4">
          {team?.length > 0 &&
            team.map((item) => (
              <TeamCard key={item.name} {...item} photo={item.photo[0].url} />
            ))}
        </article>
      </section>

      <section className="container px-4 py-20 mx-auto">
        <h2 className="mb-12 text-2xl font-bold text-center display-font md:text-4xl text-dark-blue">
          Directorio
        </h2>
        <article className="container flex flex-wrap justify-center mx-auto md:px-4">
          {directors?.length > 0 &&
            directors.map((item) => (
              <TeamCard key={item.name} {...item} photo={item.photo[0].url} />
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
