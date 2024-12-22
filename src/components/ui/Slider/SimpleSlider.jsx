import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bhaskar from '../../../assets/images/bhaskar.png';
import saurabh from '../../../assets/images/saurabh.png';
import comma from '../../../assets/svg/comma.svg';

const sliderData = [
  {
    name: 'Bhaskar Sharma',
    position: 'Co-Founder, CEO',
    text: 'Hey, I’m Bhaskar Sharma—founder, design enthusiast, and the guy who thought starting a creative agency would be a smooth ride (it’s not, but it’s worth it). Blends Agency began as a caffeine-fueled idea and has grown into a space where design and marketing come together to create something extraordinary. We don’t just build brands here; we craft stories that leave a lasting impression. So, if you’re ready to turn your big ideas into even bigger successes, let’s chat—coffee’s on me!',
    image: bhaskar,
  },
  {
    name: 'Saurabh Adhate ',
    position: 'Co-Founder, CMO',
    text: 'Hey, I’m Saurabh Adhate—co-founder, designer, trader, and Head of Marketing at Blends Agency. With a background in biotech engineering and graphic designing with a knack for creativity, I thrive at the intersection of strategy and design. At Blends, we’re not just about building brands; we’re about crafting memorable experiences that connect and inspire. Whether it’s through innovative campaigns or bold storytelling, my goal is to turn your vision into a marketing masterpiece. Ready to make something extraordinary? Let’s connect! I’ll bring the marketing magic, you bring the ambition!',
    image: saurabh,
  },
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {sliderData.map((element, index) => (
        <div
          className="bg-brand flex flex-col lg:flex-row rounded-lg py-12 px-8 font-poppins"
          key={index}
        >
          <div className="flex flex-col lg:flex-row w-full">
            {/* Text Section */}
            <div className="flex flex-col items-start w-full lg:w-[55%] relative px-4 lg:px-8">
              <div className="text-2xl lg:text-3xl text-white">{element.name}</div>
              <div className="text-white font-light">{element.position}</div>
              <div className="text-black text-base md:text-lg lg:text-xl font-light mt-4 leading-6 md:leading-7">
                {element.text}
              </div>
              <div className="hidden lg:block">
                <img
                  alt="comma"
                  src={comma}
                  className="absolute bottom-0 right-4 lg:right-8 w-8 h-8"
                />
              </div>
            </div>
            <div className="w-full lg:w-[45%] flex justify-center mt-6 lg:mt-0">
              <img
                alt="avatar"
                src={element.image}
                className="w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
