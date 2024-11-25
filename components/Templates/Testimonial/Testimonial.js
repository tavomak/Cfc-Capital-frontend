import Card from '@/components/Atoms/Card';
import Image from 'next/image';

const Testimonial = ({ quote, author, imageUrl }) => (
  <Card
    containerClassName="container md:mx-auto my-12 max-w-4xl"
    cardClassName="pb-0 bg-white flex flex-col md:flex-row items-center justify-center"
  >
    <div className="p-8 md:pl-14 md:w-1/2">
      <p className="max-w-xs ">{`"${quote}"`}</p>
      <p className="mt-6 text-xl font-semibold display-font text-blue">
        {author}
      </p>
    </div>
    <div className="order-first w-full md:w-1/2 md:order-last">
      <Image
        src={imageUrl}
        alt={author}
        width={448}
        height={500}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          maxHeight: '400px',
        }}
      />
    </div>
  </Card>
);

export default Testimonial;
