import Card from '@/components/Atoms/Card';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ imageUrl, title, description, slug }) => (
  <Card
    containerClassName="container md:mx-auto my-12 max-w-4xl px-8"
    cardClassName="bg-white p-8"
  >
    <Link
      href={`/prensa/${slug}`}
      className="flex flex-col md:flex-row items-center group"
    >
      <div className="md:w-2/5 overflow-hidden rounded-3xl">
        <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
          <Image
            src={imageUrl}
            alt={`${title} image`}
            width={309}
            height={302}
            className="object-cover aspect-square w-full h-full"
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
      </div>
    </Link>
  </Card>
);

export default BlogCard;
