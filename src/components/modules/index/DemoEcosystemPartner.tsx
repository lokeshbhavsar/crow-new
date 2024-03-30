import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);
const partnerData = [
  {
    img: '/images/partner/light/1.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/2.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/3.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/4.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/5.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/1.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/2.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/3.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/4.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/5.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/1.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/2.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/3.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/4.png',
    alt: 'partner logo',
  },
  {
    img: '/images/partner/light/5.png',
    alt: 'partner logo',
  },
];
const Partner = () => {
  const breakpoints = {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 25,
    },
  };
  return (
    <div className="partner">
      <div className="container">
        <div className="partner__wrapper">
          <section
            className="stacking padding-bottom"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="section-header section-header--middle text-center">
              <h2 className="section-header__subtitle" >
                {' '}
                Ecosystem <span>Partner</span>{' '}
              </h2>
            </div>
            <div className="container cta">
              <div className="work__wrapper">
                <div className="row d-flex justify-content-around g-4">
                  {/* <div className="col-lg-3 col-sm-6 rect-gradient p-3" style={{alignSelf:"center"}}> */}
                    <div className="work__item">
                      <div className="work__item-inner">
                        <h2 className="section-header__subtitle" style={{textAlign:"center"}}> Ecosystem</h2>
                        <Swiper
                          className="partner__slider"
                          spaceBetween={24}
                          slidesPerView={2}
                          breakpoints={breakpoints}
                          speed={2000}
                          loop={true}
                          autoplay={{
                            delay: 1,
                            disableOnInteraction: true,
                          }}
                          modules={[Navigation, Pagination, Autoplay]}
                        >
                          {partnerData.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="swiper-slide">
                                <div className="partner__item">
                                  <div className="partner__item-inner">
                                    <img
                                      src={item.img}
                                      alt="partner logo"
                                      className="dark"
                                    />
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                          {}
                          {/* </div> */}
                        </Swiper>
                      </div>
                    </div>
                  {/* </div> */}
      <hr className='hr_line' />

                  {/* <div className="col-lg-3 col-sm-6 rect-gradient p-3"> */}
                    <div className="work__item">
                      <div className="work__item-inner">
                        <div className="work__item-thumb text-center pb-3">
                          <img
                            src="/images/crowboy (10).png"
                            alt="work Step 2 Image"
                            width={200}
                          />
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                  <div >
      <hr className='hr_line' />
  
      </div>
                  {/* <div className="col-lg-3 col-sm-6 rect-gradient p-3" style={{alignSelf:"center"}}> */}
                    <div className="work__item">
                      <div className="work__item-inner">
                        <h2 className="section-header__subtitle" style={{textAlign:"center"}}>
                          {' '}
                          <span>Partners</span>{' '}
                        </h2>
                        <Swiper
                          className="partner__slider"
                          spaceBetween={24}
                          slidesPerView={2}
                          breakpoints={breakpoints}
                          speed={2000}
                          loop={true}
                          autoplay={{
                            delay: 1,
                            disableOnInteraction: true,
                          }}
                          modules={[Navigation, Pagination, Autoplay]}
                        >
                          {partnerData.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="swiper-slide">
                                <div className="partner__item">
                                  <div className="partner__item-inner">
                                    <img
                                      src={item.img}
                                      alt="partner logo"
                                      className="dark" style={{padding:"20px"}}
                                    />
                                  </div>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))}
                          {}
                          {/* </div> */}
                        </Swiper>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Partner;
