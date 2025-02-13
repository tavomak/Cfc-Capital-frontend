import Card from '@/components/Atoms/Card';
import Image from 'next/image';

const NewCard = ({ title, slug, image, author, excerpt, tags }) => (
  <Card
    cardClassName="p-4 w-3/4 md:w-full mx-auto bg-sky-50 flex flex-col group hover:shadow-none"
    header={
      <a
        href={`/prensa/${slug}`}
        className="p-2 overflow-hidden min-h-64 group rounded-2xl"
      >
        <Image
          className="rounded-2xl transition scale-100 group-hover:scale-110"
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
      </a>
    }
  >
    <div className="h-full">
      <div className="py-3 space-y-3">
        <a href={`/prensa/${slug}`}>
          <h3 className="display-font mb-2 md:text-lg text-base font-semibold text-blue line-clamp-2">
            {title}
          </h3>
        </a>

        {author && (
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full">
              <Image
                src={author.picture?.url || '/CFC-logo-icon.png'}
                alt={`${author.name} profile picture`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-lg md:text-xs text-dark-grey">
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

        {!author && tags && (
          <span className="w-fit px-3 py-1 text-sm bg-sky-100 text-soft-blue rounded-md">
            {tags}
          </span>
        )}

        <a href={`/prensa/${slug}`} className="flex flex-col flex-grow">
          <p className="font-medium text-xs md:text-sm text-dark-grey line-clamp-3">
            {excerpt}
          </p>
        </a>
      </div>
    </div>
  </Card>
);
export default NewCard;
