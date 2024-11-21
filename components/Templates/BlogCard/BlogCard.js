import Card from '@/components/Atoms/Card';
import Image from 'next/image';

const BlogCard = ({
  imageUrl,
  tags,
  title,
  description,
  source,
  websiteUrl,
}) => {
  return (
    <Card
      containerClassName={
        'bg-white rounded-[2rem] overflow-hidden w-[80%] md:w-full mx-auto mb-8 max-w-3xl'
      }
      cardClassName={'md:py-8 md:px-12 flex flex-col md:flex-row'}
    >
      <div className="md:w-2/5 m-4 md:m-2">
        <Image
          src={imageUrl}
          alt={`${title} image`}
          width={600}
          height={600}
          className="h-full"
        />
      </div>
      <div className="p-6 md:w-3/5">
        <div className="flex gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="py-1 uppercase text-medium-blue text-xs font-bold"
            >
              | {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold text-medium-purple mb-4">{title}</h2>
        <p className="text-medium-grey text-md leading-relaxed mb-4">
          {description.slice(0, 110)}
          {description.length > 110 && '...'}
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-medium-purple hover:underline"
          >
            {''} Leer más
          </a>
        </p>

        <div className="flex items-center text-soft-blue bg-[#B2EAF6] w-fit rounded-2xl">
          <span className="uppercase px-4 py-1 text-xs font-semibold">
            {source}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
