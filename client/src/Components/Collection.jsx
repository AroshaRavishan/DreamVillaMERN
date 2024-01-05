import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

function Collection() {
  const sliderData = [
    { id: 1, title: 'Item 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Item 2', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Item 3', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    // Add more items as needed
  ];

  const splideOptions = {
    type: 'loop',
    perPage: 4,
    arrows: false,
    pagination: true,
    gap: '1rem',
    autoplay: true,
    perMove: 1,
    interval: 3000,

    autoScroll: {
      speed: 1,
      pauseOnHover: true,
      pauseOnFocus: false,
    },
    breakpoints: {
      1200: {
        perPage: 2,
        gap: '1rem',
      },
      991: {
        perPage: 2.5,
        gap: '1rem',
      },
      767: {
        perPage: 1.5,
        gap: '0.5rem',
      },
      575: {
        perPage: 1.5,
        arrows: false,
        gap: '1rem',
      },
    },
  };

  const splideRef = useRef(null);

  const prevSlide = () => {
    if (splideRef.current) {
      splideRef.current.go('-1');
    }
  };

  const nextSlide = () => {
    if (splideRef.current) {
      splideRef.current.go('+1');
    }
  };

  return (
    <div className="container mx-auto px-4 mt-10 md:mt-30">
      <h2 className="text-2xl font-bold mb-4 text-center">Collection</h2>
      <div>
        <div className="flex justify-end gap-5 mt-10 px-1 hidden md:flex">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-chevron-left text-primary hover:text-white hover:bg-primary border border-primary rounded-10 w-[35px] h-[35px] flex justify-center items-center"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-chevron-right text-primary hover:text-white hover:bg-primary border border-primary rounded-10 w-[35px] h-[35px] flex justify-center items-center"></i>
          </button>
        </div>
      </div>
      <Splide options={splideOptions} ref={splideRef}>
        {sliderData.map(item => (
          <SplideSlide key={item.id} className='flex justify-center mt-10'>
            <div className="bg-white rounded-4 shadow-soft-shadow w-[20rem] my-5 !bg-primary p-3">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Collection;
