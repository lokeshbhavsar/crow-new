import Link from 'next/link';
import FsLightbox from 'fslightbox-react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CiShare1 } from 'react-icons/ci';

const Hero = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={['https://youtu.be/MHhIzIgFgJo']}
      />
      <section className="banner banner--style1">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
          emulateTouch={true}
          swipeable={true}
        >
           <div className=" px-4 py-2">
            <div className="slider_contents_wrapper color-3">
              <div className="slider_contents_wrapper_a">
                <h1 className="slider_contents_wrapper_header">
                Join Our Community!
                </h1>
                <h2 className="slider_contents_wrapper_text">
                Get WILD with the best community in GameFi and become a part of the next frontier!
                </h2>
                <div
                onClick={() => window.open("https://discord.gg/crowboys-labs-932735740423598130")}
                  style={{ marginTop: '22px', color: '#fff',cursor:"pointer" }}
                  className="trk-btn trk-btn--primary trk-btn--arrow hero-card-btn"
                >
                 
                  Join Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>{' '}
                </div>
              </div>
              <div className="slider_contents_wrapper_b">
                <img
                  src="/images/Crowboy-2.png"
                  alt="card-image-1"
                  className="slide_first"
                  style={{height:"100%",objectFit:"contain"}}
                />
                
              </div>
            </div>
          </div>

          <div className=" px-4 py-2">
            <div className="slider_contents_wrapper color-3">
              <div className="slider_contents_wrapper_a">
                <h1 className="slider_contents_wrapper_header">
                Get Your Genesis Crate!
                </h1>
                <h2 className="slider_contents_wrapper_text">
                Get your Genesis Crate today and join the WILD WEST of GameFi!
                </h2>
                <div
                   onClick={() => window.open("https://app.ebisusbay.com/collection/genesis-crates")}
                  style={{ marginTop: '22px', color: '#fff',cursor:"pointer" }}
                  className="trk-btn trk-btn--primary trk-btn--arrow hero-card-btn"
                >
                 Buy Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>{' '}
                </div>
              </div>
              <div className="slider_contents_wrapper_b">
                <img
                  src="/images/crowboy (5).png"
                  alt="Slide 1"
                  className="slide_first"
                  style={{height:"100%",objectFit:"contain"}}
                />
              </div>
            </div>
          </div>
          <div className=" px-4 py-2">
            <div className="slider_contents_wrapper  color-3">
              <div className="slider_contents_wrapper_a">
                <h1 className="slider_contents_wrapper_header">
                A Deeper Dive!
                </h1>
                <h2 className="slider_contents_wrapper_text">
                Want to learn more? Check out our directory where you can dive deep into WEST CITY!
                </h2>
                <div
                  onClick={() => window.open("https://crowboys.info/?__v=11.146.0")}
          
                  style={{ marginTop: '22px', color: '#fff',cursor:"pointer"  }}
                  className="trk-btn trk-btn--primary trk-btn--arrow hero-card-btn"
                >
                  Learn More
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>{' '}
                </div>
              </div>
              <div className="slider_contents_wrapper_b">
                <img
                  src="/images/Bank.png"
                  alt="Slide 1"
                  className="slide_first slider-b-img"
                  style={{height:"100%",objectFit:"contain"}}
                />
              </div>
            </div>
          </div>
         
          <div className=" px-4 py-2">
            <div className="slider_contents_wrapper color-3">
              <div className="slider_contents_wrapper_a">
                <h1 className="slider_contents_wrapper_header">
                Follow Us On Twitter!
                </h1>
                <h2 className="slider_contents_wrapper_text">
                Stay up to date with the latest sneak peaks, news, and current releases!
                </h2>
                <div
                   onClick={() => window.open("https://twitter.com/Crowboylabs")}
                  style={{ marginTop: '22px', color: '#fff',cursor:"pointer"  }}
                  className="trk-btn trk-btn--primary trk-btn--arrow hero-card-btn"
                >
               Follow Now
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>{' '}
                </div>
              </div>
              <div className="slider_contents_wrapper_b">
                <img
                  src="/images/Cactus.png"
                  alt="Slide 1"
                  className="slide_first"
                  style={{height:"100%",objectFit:"contain"}}
                />
              </div>
            </div>
          </div>
        </Carousel>

        <div className="banner__bg">
          <div className="banner__bg-element">
            <span className="bg-color d-lg-none"></span>
          </div>
        </div>
        <div className="container mt-40">
          <div className="banner__wrapper">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6 col-md-6">
                <div
                  className="banner__content"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="banner__content-coin">
                    <img src="images/banner/home1/3.png" alt="coin icon" />
                  </div>
                  <h1
                    className="banner__content-heading"
                  
                  >
                    The Future Is <span   style={{ color: '#c3976a ' }}>WILD!</span>
                    {/* Invest Your Money With <span>Higher Return</span> */}
                  </h1>
                  <p className="banner__content-moto">
                    Welcome to Crowboys Finance the frontier of decentralized
                    crypto exchange where innovation meets the Wild West of
                    digital assets. Saddle up for a seamless trading experience
                    with our NFT Staking, Token Swapping, and Cross-Chain
                    Technology that is as swift as a mustang, secure as a bank
                    vault, and innovative as the pioneers of the blockchain
                    prairie.
                    {/* Anyone can invest money to different currency to increase
                    their earnings by the help of Bitrader through online. */}
                  </p>
                  <div className="banner__btn-group btn-group">
                    <Link
                      href="https://app.ebisusbay.com/collection/genesis-crates"
                      target='_blank'
                      className="trk-btn trk-btn--primary trk-btn--arrow hero-card-btn"
                    >
                      {/* {`Get Started    `} */}
                      {`  Get Started  `}
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>{' '}
                    </Link>

                    <Link
                      scroll={false}
                      href="/trade"
                    
                      className="trk-btn trk-btn--outline22 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_1397_814)">
                          <path
                            d="M10.5547 7.03647C9.89015 6.59343 9 7.06982 9 7.86852V16.1315C9 16.9302 9.89015 17.4066 10.5547 16.9635L16.7519 12.8321C17.3457 12.4362 17.3457 11.5638 16.7519 11.1679L10.5547 7.03647Z"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <rect
                          x="-0.75"
                          y="0.75"
                          width="22.5"
                          height="22.5"
                          rx="11.25"
                          transform="matrix(-1 0 0 1 22.5 0)"
                          stroke="#fff"
                          strokeWidth="1.5"
                        />
                        <defs>
                          <clipPath id="clip0_1397_814">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>{' '}
                      {/* Watch Video */}
                      Trade Now
                    </Link>
                  </div>

                  <div className="banner__content-social">
                    <p>Follow Us</p>
                    <ul className="social">
                    <li className="social__item">
                <Link
                  scroll={false}
                  href="https://twitter.com/Crowboylabs"
                  target='_blank'
                  className="social__link social__link--style22 "
                >
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="social__item">
                <Link
                  scroll={false}
                  href="https://t.me/crowboys"
                  target='_blank'
                  className="social__link social__link--style22"
                >
                  <i className="fa-brands fa-telegram"></i>
                </Link>
              </li>
          
              <li className="social__item">
                <Link
                  scroll={false}
                  href="https://crowboys.info/"
                  target='_blank'
                  className="social__link social__link--style22"
                >
                  <i className="fa-solid fa-gamepad"></i>
                </Link>
              </li>
          

              <li className="social__item">
                <Link
                  scroll={false}
                  href="https://www.linkedin.com/company/crowboys"
                  target='_blank'
                  className="social__link social__link--style22"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>

              <li className="social__item">
                <Link
                  scroll={false}
                  href="https://discord.gg/crowboys-labs-932735740423598130"
                  target='_blank'
                  className="social__link social__link--style22"
                >
                    <i className="fa-brands fa-discord"></i>
                </Link>
              </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 mt-5" style={{objectFit:"cover",display:"flex",justifyContent:'flex-end'}} data-aos="fade-left"
                  data-aos-duration="1000">
             
                  <img
                    src="/images/typing.gif"
                    alt="banner-thumb"
                    // className="dark"
                    width={500}
                    height={200}
                    
                  />
               
              </div>
            </div>
          </div>
        </div>
        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            {/* <img src="images/banner/home1/4.png" alt="shape icon" /> */}
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
