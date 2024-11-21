import Card from '@/components/Atoms/Card';
import Image from 'next/image';

const Testimonial = ({ quote, author, imageUrl }) => {
  return (
    <Card
      containerClassName="container md:px-4 mx-auto w-3/4 md:w-full"
      cardClassName={
        'w-[90%] mx-auto flex md:h-[400px] justify-between flex-col-reverse md:flex-row bg-white mb-20 rounded-[4rem] shadow-lg hover:shadow-xl overflow-hidden'
      }
    >
      <div className="flex flex-col justify-center items-start mx-4 my-4 py-12 gap-5 md:mx-16">
        <p className="w-full mx-auto text-center text-pretty md:text-left md:w-3/4">
          "{quote}"
        </p>
        <p className="mx-auto text-center md:text-left w-full md:w-3/4 display-font font-semibold text-xl md:text-2xl text-blue">
          {author}
        </p>
      </div>
      <div>
        <Image
          src={imageUrl}
          alt={author}
          width={800}
          height={800}
          className="h-full"
        />
      </div>
    </Card>
  );
};

export default Testimonial;
