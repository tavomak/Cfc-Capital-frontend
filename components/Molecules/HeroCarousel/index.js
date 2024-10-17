import Slider from 'react-slick';
import SlideItem from '@components/Molecules/SlideItem';

const HeroCarousel = ({ settings, banners }) => (
  <Slider {...settings}>
    {
      banners.map((item) => (
        <SlideItem
          key={item.id}
          content={item}
        />
      ))
    }
  </Slider>
);

export default HeroCarousel;
