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
                  <Link
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
                      width={width || 390}
                      height={height || 390}
                      style={{
                        objectFit: 'cover',
                        objectPosition: objectPosition || 'top left',
                        width: '100%',
                        height: '100%',
                      }}
                      placeholder="blur"
                      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    />
                  </Link>
                </div>
                <div className={`${styles.column} px-3 align-content-center`}>
                  <p className="display-font">
                    {item.title}
                  </p>
                  <Link
                    href={`/prensa/${item.slug}`}
                    className={`btn ${btnClassName} display-font px-4`}
                  >
                    Ver más
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
