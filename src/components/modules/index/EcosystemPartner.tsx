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
    autoplaySpeed: 2000,
  };

  const BoxClient = styled.div`
    margin-right: 1.5rem;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin-bottom:10px;
    justify-content: center;
    background: #c3976a ;
  
    border-radius: 50px;
    div > img {
    }
  `;

  const Items = [
    {
      id: 1,
      img: '/images/ecosystem-image.png',

      name: 'Jeremiah Dooley',
      jobTitle: 'Direct Marketing Executive',
      text: 'Sunt neque nam laborum voluptatem sed voluptatem beatae eligendi ut.',
    },
    {
      id: 2,
      img: '/images/ecosystem-image.png',

      name: 'Catherine Treutel',
      jobTitle: 'Customer Directives Strategist',
      text: 'Provident quae aut earum accusantium quia qui. Officiis sit ut eum eum.',
    },
    {
      id: 3,
      img: '/images/ecosystem-image.png',

      name: 'Lloyd McClure',
      jobTitle: 'Forward Intranet Liaison',
      text: 'Natus temporibus doloremque harum aspernatur sint. At laudantium sint rerum dolorem.',
    },
    {
      id: 4,
      img: '/images/ecosystem-image.png',

      name: 'Elvira Boyer',
      jobTitle: 'Direct Group Designer',
      text: 'Vero omnis eligendi facere molestiae sequi sit quasi dolor quod. Enim error sed fugiat.',
    },

    {
      id: 5,
      img: '/images/ecosystem-image.png',

      name: 'Jared Von DVM',
      jobTitle: 'Forward Solutions Agent',
      text: 'Voluptatibus rerum dignissimos voluptatem deserunt. Est ut eius eaque quae.',
    },
  ];
  const Items1 = [
    {
      id: 1,
      img: '/images/pngwing.com(1).png',

      name: 'Jeremiah Dooley',
      jobTitle: 'Direct Marketing Executive',
      text: 'Sunt neque nam laborum voluptatem sed voluptatem beatae eligendi ut.',
    },
    {
      id: 2,
      img: '/images/pngwing.com(1).png',

      name: 'Catherine Treutel',
      jobTitle: 'Customer Directives Strategist',
      text: 'Provident quae aut earum accusantium quia qui. Officiis sit ut eum eum.',
    },
    {
      id: 3,
      img: '/images/pngwing.com(1).png',

      name: 'Lloyd McClure',
      jobTitle: 'Forward Intranet Liaison',
      text: 'Natus temporibus doloremque harum aspernatur sint. At laudantium sint rerum dolorem.',
    },
    {
      id: 4,
      img: '/images/pngwing.com(1).png',

      name: 'Elvira Boyer',
      jobTitle: 'Direct Group Designer',
      text: 'Vero omnis eligendi facere molestiae sequi sit quasi dolor quod. Enim error sed fugiat.',
    },

    {
      id: 5,
      img: '/images/pngwing.com(1).png',

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
                Crowboy <span>Labs</span>{' '}
              </h2>
            </div>
            <div className="display_large_screen">
              <div className="container cta">
                <div className="work__wrapper">
                  <div className="row d-flex justify-content-around g-4">
                    <div
                      className="col-lg-3 col-sm-12  p-3 "
                      style={{ alignSelf: 'center', marginTop: '160px' }}
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
                          <Slider {...settings}>
                            {Items.map((item,i) => (
                              <BoxClient key={i} style={{width:"180px"}} className="d-flex align-items-center justify-contents-center">
                                <div className="d-flex align-items-start justify-content-between">
                                  <img src={item.img} alt={item.img} className="eco-sys-image-first" width={180} />
                                </div>
                              </BoxClient>
                            ))}
                          </Slider>
                          <vr className="vr_line_largeA" />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-12 p-3 ecosystem-partner-image ">
                      <div className="work__item">
                        <div className="work__item-inner">
                          <hr className="hr_line_largeA " />

                          <div className="work__item-thumb text-center pb-3">
                            <img
                              src="/images/Crowboy (1).png"
                              alt="work Step 2 Image"
                              width={200}
                            />
                          </div>
                          <hr className="hr_line_largeB " />
                        </div>
                      </div>
                    </div>

                    <div
                      className="col-lg-3 col-sm-12  p-3 ecosystem-part-right-image"
                      style={{ alignSelf: 'center',  }}
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
                          <Slider {...settings}>
                            {Items1.map((item,i) => (
                              <BoxClient key={i} className="d-flex align-items-center justify-contents-center">
                                <div className="d-flex align-items-start justify-content-between">
                                  <img src={item.img} alt={item.img} width={120}  />
                                </div>
                              </BoxClient>
                            ))}
                          </Slider>

                          <vr className="vr_line_largeB" />
                        </div>
                      </div>
                    </div>
                  </div>
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
