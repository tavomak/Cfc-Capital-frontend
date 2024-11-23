import Image from 'next/image';
import Link from 'next/link';

const CardColumns = ({ posts }) => (
  <>
    {posts.map((item) => (
      <div className="pb-5 col-md-4" key={item.id}>
        <div className="shadow card" style={{ height: '100%' }}>
          <div className="card-header">
            <Link
              href={`/prensa/${item.slug}`}
              className="mb-4 noticeImg d-block"
            >
              <Image
                src={item.coverImage.url}
                alt="Cfc Capital Logo"
                width={16}
                height={9}
                layout="responsive"
                objectFit="contain"
              />
            </Link>
          </div>
          <div className="card-body d-flex flex-column">
            <p className="display-font">{item.title}</p>
            <Link
              href={`/prensa/${item.slug}`}
              className="mt-auto btn btn-primary display-font"
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default CardColumns;
