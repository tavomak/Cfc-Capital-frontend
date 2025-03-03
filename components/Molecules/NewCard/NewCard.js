import Image from 'next/image';

const NewCard = ({ title, slug, image, author, excerpt, tags }) => {
  console.log({ title, slug, image, author, excerpt, tags });
  return (
    <a
      href={`/prensa/${slug}`}
      className="flex flex-col w-3/4 p-4 mx-auto md:w-full bg-sky-50 group hover:shadow-none rounded-3xl"
    >
      <article>
        <div className="p-2 overflow-hidden min-h-64 group rounded-2xl">
          <Image
            className="transition scale-100 rounded-2xl group-hover:scale-110"
            src={image}
            alt={title}
            width={500}
            height={500}
            style={{
              width: '100%',
              height: '100%',
              maxHeight: '16rem',
              objectPosition: 'top',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="py-3 space-y-3">
          <h3 className="mb-2 text-base font-semibold display-font md:text-lg text-blue line-clamp-2">
            {title}
          </h3>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {author && (
              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden rounded-full h-11 w-11">
                  <Image
                    src={author.picture?.url || '/CFC-logo-icon.png'}
                    alt={`${author.name} profile picture`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-grey">
                    {author.name}
                  </p>
                  {author.title && (
                    <p className="text-xs display-font text-dark-grey">
                      {author.title}
                    </p>
                  )}
                </div>
              </div>
            )}

            {tags && tags.length > 0 && (
              <span className="px-3 py-1 text-sm rounded-md w-fit bg-sky-100 text-soft-blue">
                {tags}
              </span>
            )}
          </div>

          <p className="text-xs font-medium md:text-sm text-dark-grey line-clamp-3">
            {excerpt}
          </p>
        </div>
      </article>
    </a>
  );
};
export default NewCard;
