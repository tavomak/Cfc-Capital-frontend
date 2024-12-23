import Card from '@/components/Atoms/Card';
import Image from 'next/image';

const BlogCard = ({ imageUrl, title, description, source, websiteUrl }) => (
  <Card
    containerClassName="container md:mx-auto my-12 max-w-4xl px-8"
    cardClassName="bg-white p-8"
  >
    <a
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row items-center group"
    >
      <div className="md:w-2/5 overflow-hidden rounded-3xl">
        <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
          <Image
            src={imageUrl}
            alt={`${title} image`}
            width={309}
            height={302}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="py-6 md:px-6 md:w-3/5">
        <h2 className="display-font mb-4 text-2xl font-bold text-medium-purple">
          {title}
        </h2>
        <p className="mb-4 leading-relaxed text-medium-grey text-md">
          {description}
        </p>

        <div className="flex items-center text-soft-blue bg-soft-medium-blue w-fit rounded-2xl">
          <span className="px-4 py-1 text-xs font-semibold uppercase">
            {source}
          </span>
        </div>
      </div>
    </a>
  </Card>
);

export default BlogCard;
