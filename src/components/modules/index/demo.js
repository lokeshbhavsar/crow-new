import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Navigation, Pagination]);
import Marquee from 'react-marquee-slider';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Partner = () => {
  const settings = {
    dots: false,
    loop: true,
    vertical: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const BoxClient = styled.div`
    margin-right: 1.5rem;
    padding: 0.4rem;
    justify-content: center;
    background: #c3976a ;
    background: linear-gradient(to right, #c3976a0%, #d9d7c7 100%);
    border-radius: 50px;
    div > img {
    }
  `;

  const Items = [
    {
      id: 1,
      img: '/images/partner/light/1-dark.png',

      name: 'Jeremiah Dooley',
      jobTitle: 'Direct Marketing Executive',
      text: 'Sunt neque nam laborum voluptatem sed voluptatem beatae eligendi ut.',
    },
    {
      id: 2,
      img: '/images/partner/light/2-dark.png',

      name: 'Catherine Treutel',
      jobTitle: 'Customer Directives Strategist',
      text: 'Provident quae aut earum accusantium quia qui. Officiis sit ut eum eum.',
    },
    {
      id: 3,
      img: '/images/partner/light/3-dark.png',

      name: 'Lloyd McClure',
      jobTitle: 'Forward Intranet Liaison',
      text: 'Natus temporibus doloremque harum aspernatur sint. At laudantium sint rerum dolorem.',
    },
    {
      id: 4,
      img: '/images/partner/light/4-dark.png',

      name: 'Elvira Boyer',
      jobTitle: 'Direct Group Designer',
      text: 'Vero omnis eligendi facere molestiae sequi sit quasi dolor quod. Enim error sed fugiat.',
    },

    {
      id: 5,
      img: '/images/partner/light/5-dark.png',

      name: 'Jared Von DVM',
      jobTitle: 'Forward Solutions Agent',
      text: 'Voluptatibus rerum dignissimos voluptatem deserunt. Est ut eius eaque quae.',
    },
  ];

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
              <h2 className="section-header__subtitle">
                {' '}
                Ecosystem <span>Partner</span>{' '}
              </h2>
            </div>
            <div className="container cta">
              <div className="work__wrapper">
                <div className="row d-flex justify-content-around g-4">
                  <div
                    className="col-lg-3 col-sm-6 rect-gradient p-3"
                    style={{ alignSelf: 'center' }}
                  >
                    <div className="work__item">
                      <div className="work__item-inner">
                        <h2
                          className="section-header__subtitle"
                          style={{ textAlign: 'center' }}
                        >
                          {' '}
                          Ecosystem
                        </h2>
                        <Slider {...settings} className="py-5">
                          {Items.map((item,i) => (
                            <BoxClient key={i} className="d-flex align-items-center justify-contents-center">
                              <div className="d-flex align-items-start justify-content-between ">
                                <img src={item.img} alt={item.img} />
                              </div>
                            </BoxClient>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-sm-6 rect-gradient p-3">
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
                  </div>

                  <div
                    className="col-lg-3 col-sm-6 rect-gradient p-3"
                    style={{ alignSelf: 'center' }}
                  >
                    <div className="work__item">
                      <div className="work__item-inner">
                        <h2
                          className="section-header__subtitle"
                          style={{ textAlign: 'center' }}
                        >
                          {' '}
                          <span>Partners</span>{' '}
                        </h2>
                        <Slider {...settings} className="py-5">
                          {Items.map((item,i) => (
                            <BoxClient key={i} className="d-flex align-items-center justify-contents-center">
                              <div className="d-flex align-items-start justify-content-between ">
                                <img src={item.img} alt={item.img} />
                              </div>
                            </BoxClient>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="partner__wrapper">
            <section
              className="stacking padding-bottom"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="section-header section-header--middle text-center">
                <h2 className="section-header__subtitle">
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
                        <h2
                          className="section-header__subtitle"
                          style={{ textAlign: 'center' }}
                        >
                          {' '}
                          Ecosystem
                        </h2>
                        <Swiper
                          className="partner__slider"
                          spaceBetween={24}
                          slidesPerView={2}
                          speed={2000}
                          loop={true}
                          autoplay={{
                            delay: 1,
                            disableOnInteraction: true,
                          }}
                          modules={[Navigation, Pagination, Autoplay]}
                        >
                          <Marquee direction="ltr" velocity={10}>
                            {Items.map((item,i) => (
                              <BoxClient key={i} className="d-flex align-items-center justify-contents-center">
                                <div className="d-flex align-items-start justify-content-between">
                                  <img src={item.img} alt={item.img} />
                                </div>
                              </BoxClient>
                            ))}
                          </Marquee>
                        </Swiper>
                      </div>
                    </div>
                    {/* </div> */}
                    <hr className="hr_line" />

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
                    <div>
                      <hr className="hr_line" />
                    </div>
                    {/* <div className="col-lg-3 col-sm-6 rect-gradient p-3" style={{alignSelf:"center"}}> */}
                    <div className="work__item">
                      <div className="work__item-inner">
                        <h2
                          className="section-header__subtitle"
                          style={{ textAlign: 'center' }}
                        >
                          {' '}
                          <span>Partners</span>{' '}
                        </h2>
                        <Swiper
                          className="partner__slider"
                          spaceBetween={24}
                          slidesPerView={2}
                          speed={2000}
                          loop={true}
                          autoplay={{
                            delay: 1,
                            disableOnInteraction: true,
                          }}
                          modules={[Navigation, Pagination, Autoplay]}
                        >
                          <Marquee direction="ltr" velocity={10}>
                            {Items.map((item,i) => (
                              <BoxClient key={i} className="d-flex align-items-center justify-contents-center">
                                <div className="d-flex align-items-start justify-content-between">
                                  <img src={item.img} alt={item.img} />
                                </div>
                              </BoxClient>
                            ))}
                          </Marquee>
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
    </div>
  );
};
export default Partner;
