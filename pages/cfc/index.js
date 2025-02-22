import Image from 'next/image';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import ClientsIcon from '@/components/Atoms/ClientsIcon';
import StarIcon from '@/components/Atoms/StarIcon';
import DolarIcon from '@/components/Atoms/DolarIcon';

import { getTeamMembers, highlights } from '@/utils';
import Layout from '@/components/Templates/Layout';
import Card from '@/components/Atoms/Card';
import Link from 'next/link';

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
      <section className="container md:px-4 mx-auto flex flex-wrap">
        <AdvancedVideo
          cldVid={myVideo}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-servicios.jpg"
        />
      </section>
      <section className="container md:px-4 mx-auto py-10 my-10 flex flex-wrap">
        {highlights.map((item) => (
          <Card
            key={item.name}
            containerClassName="w-full md:w-1/3 px-4 py-4 md:py-0"
            cardClassName="p-4"
          >
            {item.icon && (
              <div
                className={`p-4 text-4xl text-${item.color} flex justify-center`}
              >
                <span className="w-28 h-28">{iconsMapping[item.icon]}</span>
              </div>
            )}
            {item.prev && (
              <p className="text-center display-font font-semibold text-xl text-blue">
                {item.title}
              </p>
            )}
            {item.description && (
              <p className="text-center mt-5 text-sm text-blue">
                {item.description}
              </p>
            )}
          </Card>
        ))}
        <div className="text-center py-10 w-full">
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
            <div className="container md:px-4 mx-auto">
              <div className="md:flex items-center">
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
                  <div className="md:px-12 py-6 text-center md:text-left">
                    <h1 className="font-bold text-dark-blue text-2xl md:text-4xl">
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
          <h2 className="text-xl md:text-2xl font-bold">Equipo Comercial</h2>
          <p className="px-2">
            <span className="font-bold">Más que ejecutivos</span> somos un
            equipo humano dispuestos a ser parte de tu empresa.
          </p>
          <p>Porque sabemos que eres el motor de la economía.</p>
        </div>
      </section>

      <section className="container md:px-4 mx-auto flex flex-wrap">
        {team?.length > 0 &&
          team.map((item) => (
            <div key={item.name} className="md:w-1/3 mb-4 px-2 md:px-12 py-6">
              <div className="px-md-5 mb-3">
                <div className="team-img rounded-3xl overflow-hidden">
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
                <p className="display-font text-purple text-2xl md:text-xl font-bold">
                  {item.name}
                </p>
                <p className="text-dark-blue font-bold">{item.position}</p>
                <a
                  href={`mailto:${item.email}`}
                  className="text-purple"
                  target="_blanc"
                  rel="noreferrer"
                >
                  {item.email}
                </a>
              </div>
            </div>
          ))}
      </section>

      <section className="bg-primary-gradient-grey py-12 mt-12">
        <h2 className="text-center text-blue font-bold text-2xl mb-12">
          Directorio
        </h2>
        <article className="container md:px-4 mx-auto flex flex-wrap justify-center">
          {directors?.length > 0 &&
            directors.map((item) => (
              <div key={item.name} className="md:w-1/3 mb-4 px-12 py-6">
                <div className="px-md-5 mb-3">
                  <div className="team-img rounded-3xl overflow-hidden">
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
                  <p className="display-font text-blue text-2xl md:text-xl font-bold">
                    {item.name}
                  </p>
                  <p className="text-dark-blue font-bold">{item.position}</p>
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
