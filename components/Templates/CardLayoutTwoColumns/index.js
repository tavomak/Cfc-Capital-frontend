import { shimmer, toBase64 } from '@utils/index';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

const CardLayoutTwoColumns = ({
  posts,
  title,
  width,
  height,
  objectPosition,
  className,
  btnClassName,
}) => (
  <section className={`container-fluid ${className} py-5`}>
    {posts?.length > 0 && (
      <div className="container">
        <div className="row py-5">
          {title && (
            <h1 className="display-font">
              {title}
            </h1>
          )}
        </div>
        <div className="row justify-content-center">
          {posts.map((item, key) => key < 2 && (
            <div className="col-12 col-lg pb-5" key={item.id}>
              <div
                className="d-md-flex flex-wrap justify-content-center align-items-center"
                style={{
                  height: '100%',
                }}
              >
                <div className={styles.column}>
                  <Link href={`/prensa/${item.slug}`}>
                    <a
                      href={`/prensa/${item.slug}`}
                      className="d-block"
                      style={{
                        height: '100%',
                        border: '1px solid lightgrey',
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}
                    >
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
                <div className={`${styles.column} px-3`}>
                  <p className="display-font">
                    {item.title}
                  </p>
                  <Link href={`/prensa/${item.slug}`}>
                    <a href={`/prensa/${item.slug}`} className={`btn ${btnClassName} display-font px-4`}>
                      Ver más
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </section>
);

export default CardLayoutTwoColumns;
