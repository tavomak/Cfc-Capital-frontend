import Card from '@/components/Atoms/Card';
import Image from 'next/image';

const Testimonial = ({ quote, author, imageUrl }) => (
  <Card
    containerClassName="mx-6 md:mx-auto my-12 max-w-4xl"
    cardClassName="pb-0 bg-white flex flex-col-reverse md:flex-row items-center justify-center"
  >
    <div className="md:w-1/2 p-8 flex flex-col justify-center items-start gap-8">
      <p className="container mx-auto text-center text-pretty md:text-left lg:w-3/4">
        {`"${quote}"`}
      </p>
      <p className="container mx-auto text-center md:text-left lg:w-3/4 display-font font-semibold text-xl lg:text-2xl text-blue">
        {author}
      </p>
    </div>
    <div className="md:w-1/2">
      <Image
        src={imageUrl}
        alt={author}
        width={425}
        height={530}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  </Card>
);

export default Testimonial;
