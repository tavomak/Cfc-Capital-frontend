import Image from 'next/image';

const MediaSection = ({ mediaSet = [] }) => (
  <section className="py-5 bg-dark-blue">
    <div className="container mx-auto md:px-4">
      <div className="text-center text-white">
        <h2 className="fs-1 py-4 fw-bold">
          ¡Descubre los medios <br />
          que nos han destacado!
        </h2>
        <ul className="flex flex-wrap justify-center">
          {mediaSet.map((item) => (
            <li key={item} className="p-3">
              <Image src={`/${item}.png`} alt={item} width={180} height={106} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default MediaSection;
