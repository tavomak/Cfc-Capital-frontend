import Card from '@/components/Atoms/Card';
import Image from 'next/image';

const BlogCard = ({
  imageUrl,
  tags,
  title,
  description,
  source,
  websiteUrl,
}) => (
  <Card
    containerClassName="mx-6 md:mx-auto my-12 max-w-3xl"
    cardClassName="bg-white pb-8 p-8 flex flex-col md:flex-row items-center justify-center"
  >
    <div className="md:w-2/5">
      <Image
        src={imageUrl}
        alt={`${title} image`}
        width={309}
        height={302}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
    <div className="p-6 md:w-3/5">
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="py-1 uppercase text-medium-blue text-xs font-bold"
          >
            | {tag}
          </span>
        ))}
      </div>

      <h2 className="text-xl font-bold text-medium-purple mb-4">{title}</h2>
      <p className="text-medium-grey text-md leading-relaxed mb-4">
        {description.slice(0, 110)}
        {description.length > 110 && '... '}
        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-medium-purple hover:underline"
        >
          Leer más
        </a>
      </p>

      <div className="flex items-center text-soft-blue bg-soft-medium-blue w-fit rounded-2xl">
        <span className="uppercase px-4 py-1 text-xs font-semibold">
          {source}
        </span>
      </div>
    </div>
  </Card>
);

export default BlogCard;
