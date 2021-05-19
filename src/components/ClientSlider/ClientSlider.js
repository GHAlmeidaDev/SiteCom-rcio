import Slider from 'react-slick';

import Title from '../Title/Title';


import './ClientSlider.scss';

const ClientSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
        },
      },
    ],
  };

  return (
    <section className="py-5 section-bg">
      <div className="container">
        <Title title="Exiba os patrocínios" />
        <Slider {...settings}>
          <div className="client-image-container">
            <text>Patrocínios</text>
          </div>
          <div className="client-image-container">
            <text>Patrocínios</text>
          </div>
          <div className="client-image-container">
            <text>Patrocínios</text>
          </div>
          <div className="client-image-container">
            <text>Patrocínios</text>
          </div>
          <div className="client-image-container">
            <text>Patrocínios</text>
          </div>
          <div className="client-image-container">
            <text>Patrocínios</text>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ClientSlider;
