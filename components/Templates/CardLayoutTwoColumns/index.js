import Image from 'next/image';
import Link from 'next/link';

const styles = {};

const CardLayoutTwoColumns = ({
  posts,
  title,
  width,
  height,
  className,
  btnClassName,
}) => (
  <section className={`${className} py-5`}>
    {posts?.length > 0 && (
      <div className="container md:px-4">
        <div className="row py-5">
          {title && <h1 className="display-font">{title}</h1>}
        </div>
        <div className="row justify-content-center">
          {posts.map(
            (item, key) =>
              key < 2 && (
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
                          src={
                            item.coverImage?.url
                              ? item.coverImage.url
                              : '/leasing-card.png'
                          }
                          alt="Cfc Capital Logo"
                          width={width || 90}
                          height={height || 90}
                        />
                      </Link>
                    </div>
                    <div className={`${styles.column} px-3`}>
                      <p className="display-font">{item.title}</p>
                      <Link
                        href={`/prensa/${item.slug}`}
                        className={`btn ${btnClassName} display-font px-4`}
                      >
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    )}
  </section>
);

export default CardLayoutTwoColumns;
