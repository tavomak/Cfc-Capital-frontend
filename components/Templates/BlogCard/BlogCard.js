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
    containerClassName="container md:mx-auto my-12 max-w-4xl px-8"
    cardClassName="bg-white pb-8 p-8 flex flex-col md:flex-row items-center justify-center"
  >
    <div className="md:w-2/5">
      <Image src={imageUrl} alt={`${title} image`} width={309} height={302} />
    </div>
    <div className="py-6 md:px-6 md:w-3/5">
      <div className="flex gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="py-1 text-xs font-bold uppercase text-medium-blue"
          >
            | {tag}
          </span>
        ))}
      </div>

      <h2 className="mb-4 text-xl font-bold text-medium-purple">{title}</h2>
      <p className="mb-4 leading-relaxed text-medium-grey text-md">
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
        <span className="px-4 py-1 text-xs font-semibold uppercase">
          {source}
        </span>
      </div>
    </div>
  </Card>
);

export default BlogCard;
