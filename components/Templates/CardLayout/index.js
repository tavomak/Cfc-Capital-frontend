import { shimmer, toBase64 } from '@utils/index';
import Image from 'next/image';
import Link from 'next/link';

const CardLayout = ({
  posts, title, width, height, objectPosition, col,
}) => (
  <section className="container">
    <div className="row py-5">
      {title && (
        <h1 className="display-font text-dark-blue text-capitalize">
          {title}
        </h1>
      )}
    </div>
    <div className="row justify-content-center">
      {posts?.length > 0 && posts.map((item) => (
        <div className={`${col || 'col'} pb-5`} key={item.id}>
          <div
            className="card d-flex flex-column bg-light-grey"
            style={{
              height: '100%',
              border: '1px solid lightgrey',
              borderRadius: 20,
              overflow: 'hidden',
            }}
          >
            <div className="card-header p-0">
              <Link href={`/prensa/${item.slug}`}>
                <a href={`/prensa/${item.slug}`} className="noticeImg d-block">
                  <Image
                    src={item.coverImage?.url ? item.coverImage.url : '/leasing-card.png'}
                    alt="Cfc Capital Logo"
                    width={width || 90}
                    height={height || 90}
                    layout="responsive"
                    objectFit="cover"
                    objectPosition={objectPosition || 'top left'}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                  />
                </a>
              </Link>
            </div>
            <div className="p-4 card-body">
              {item.author && item.author.name && (
                <p className="text-dark-blue">
                  <b>{item.author.name}</b>
                </p>
              )}
              <p className="display-font text-dark-blue">
                {item.title.slice(0, 60).concat(' ...')}
              </p>
            </div>
            <div className="footer pb-3 text-center">
              <Link href={`/prensa/${item.slug}`}>
                <a href={`/prensa/${item.slug}`} className="btn btn-primary display-font px-4">
                  Ver más
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CardLayout;
