import Slider from 'react-slick';
import Image from 'next/image';

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrows: false,
  speed: 1500,
  cssEase: 'cubic-bezier(.8,0,0.5,1)',
  lazyLoad: 'progressive',
  appendDots: (dots) => (
    <div className="cfc-dots-container">
      <ul className="cfc-dots-list-media"> {dots} </ul>
    </div>
  ),
  customPaging: () => <span className="cfc-dots-list-item" />,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const MediaSection = ({ mediaSet = [] }) => (
  <section className="pt-5 pb-12 bg-dark-blue">
    <div className="container mx-auto md:px-4">
      <div className="py-12 text-center text-white">
        <h2 className="py-4 text-2xl font-semibold display-font">
          ¡Descubre los medios <br />
          que nos han destacado!
        </h2>
        <Slider {...sliderSettings} slidesToShow={3}>
          {mediaSet.map((item) => (
            <div className="lg:p-4 !flex justify-center" key={item}>
              <Image src={`/${item}.png`} alt={item} width={272} height={160} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
);

export default MediaSection;
