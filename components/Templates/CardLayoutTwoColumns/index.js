import Image from 'next/image';
import Link from 'next/link';

const CardLayoutTwoColumns = ({
  posts,
  title,
  width,
  height,
  className,
  btnClassName,
}) => (
  <section className={`${className} py-12`}>
    {posts?.length > 0 && (
      <div className="container mx-auto md:px-4">
        <div className="py-5">
          {title && (
            <h1 className="text-2xl font-bold display-font">{title}</h1>
          )}
        </div>
        <div className="flex justify-center">
          {posts.map(
            (item, key) =>
              key < 2 && (
                <div
                  key={item.id}
                  className="flex flex-wrap"
                  // style={{
                  //   height: '100%',
                  // }}
                >
                  <div className="w-1/2 px-3">
                    <Link
                      href={`/prensa/${item.slug}`}
                      className="block"
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
                        alt="Cfc Capital"
                        width={width || 220}
                        height={height || 220}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-center w-1/2 px-3">
                    <p className="mb-4 display-font">{item.title}</p>
                    <div>
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
