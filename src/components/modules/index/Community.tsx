/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaAngleRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CiShare1 } from 'react-icons/ci';

function Community() {
  return (
    <section className="community  ">
      <div className="container">
        <div className="community__wrapper">
          <h2 className="text-center">
            Join our <span>Community</span>
          </h2>
          <p className="text-center">
            Together we can grow West City to new heights!
          </p>
          <div className="row gx-5  gy-4 gy-sm-0  ">
            <div className="col-lg-6 align-items-center">
              <h3 className="text-start">Ecosystem </h3>

              <div
                className="community__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="community__thumb-inner">
                  <div className="communities_bg">
                    <div className="mb-5">
                      <h6>Community Members</h6>{' '}
                      <h3
                        className="duration_count"
                        data-purecounter-start="0"
                        data-purecounter-end="10"
                      >
                        10k +
                      </h3>
                    </div>

                    <div className="mb-5">
                      <h6> Community Ambassadors</h6>{' '}
                      <h3
                        className="duration_count"
                        data-purecounter-start="0"
                        data-purecounter-end="10"
                      >
                        20 +
                      </h3>
                    </div>

                    <div className="mb-">
                      <h6> Genesis NFT Volume</h6>{' '}
                      <h3 className="duration_count">198k +</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="text-start">News</h3>
              <div
                className="community__content "
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className=" community__content-inner "></div>

                <div className="community__content-inner   ">
                  <div className="slider_community_contents_wrapper">
                    <h6 className="slider_community_contents_wrapper_header">
                      Latest Blog Post
                    </h6>
                    <img
                      src="/images/crowboy (8).png"
                      alt="Slide 1"
                      className="slide_community_second"
                    />
                    <p className="slider_community_contents_wrapper_date" style={{color:"#fff"}}>
                     Jan 19, 2023
                    </p>
                    <p
                      className="slider_community_contents_wrapper_text"
                      style={{cursor:"pointer"}}
                      onClick={() =>
                        (window.open('https://medium.com/@crowboylabs/why-cronos-is-it-the-new-wild-west-8ca6be22fafa'))
                      }
                    >
                      Why Cronos? Is it the new Wild West?!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <ul className="social social-community">
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
    </section>
  );
}

export default Community;
