/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);
import { useRef } from 'react';
const RoadmapData = [
  {
    id: 1,
    title: 'Foundation',
    description: 'Lay the necessary foundation for perpetual growth.',
  },
  {
    id: 2,
    title: 'Framing',
    description: 'Outline the ecosystem vision and architecture.',
  },
  {
    id: 3,
    title: 'Design',
    description: ' Map the genesis aesthetics and technological needs.',
  },
  {
    id: 4,
    title: 'Development',
    description: 'Develop the initial infrastructure.',
  },
  {
    id: 5,
    title: 'Testing',
    description:
      'Test initial launches through systematic and democratic community feedback (DAO).',
  },
  {
    id: 6,
    title: 'Refinement',
    description:
      'Make any and all necessary adjustments with a streamlined focus on quality assurance and security',
  },
  {
    id: 7,
    title: 'Partnership',
    description:
      'Public and community relations outreach, further strengthening the depth and stability of the ecosystem.',
  },
  {
    id: 8,
    title: 'Expansion',
    description:
      'New technologies, marketing, branding, merchandise and a cross-chain focus through technological partnerships and venture capital.',
  },
];
const Roadmap = () => {
  const swiperRef = useRef();
  const breakpoints = {
    576: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  };
  return (
    <section className="roadmap roadmap--style2 padding-top  padding-bottom bg-color">
      <div className="container">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">
            {' '}
            <span className="style2">Roadmap </span> of platform
          </h2>
          <p>
            A product roadmap shows the path ahead, helps teams plan, and guides
            the delivery of the product.
          </p>
        </div>
        <div className="roadmap__wrapper">
          <div className="roadmap__upper">
            <div className="roadmap__upper-inner">
              <div className="swiper">
                <div className="roadmap__slider">
                  <div className="swiper-wrapper">
                    <Swiper
                      onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                      modules={[Navigation, Pagination, A11y]}
                      slidesPerView={1}
                      grabCursor={true}
                      autoplay={true}
                      speed={500}
                      breakpoints={breakpoints}
                    >
                      {RoadmapData.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div className="swiper-slide">
                            <div
                              className={
                                item.id % 2 === 0
                                  ? 'roadmap__item roadmap__item--reverse'
                                  : 'roadmap__item'
                              }
                            >
                              <div
                                className={`roadmap__item-inner roadmap__item-inner--vertical-line-${
                                  item.id % 2 == 0 ? 'top' : 'bottom'
                                }`}
                              >
                                <div className="roadmap__item-content">
                                  <h5 style={{ color: '#fff' }}>
                                    {item.title}
                                  </h5>
                                  <p>{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
