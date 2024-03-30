/* eslint-disable react/no-unescaped-entities */
import React from 'react';
const About = () => {
  return (
    <section className="about padding-top--style2 padding-bottom">
      <div className="container">
        <div className="about__wrapper">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="section-header mb-50">
                <h2>
                  Experience <span className="style3">Superior</span> Service
                </h2>
              </div>
              <div
                className="about__content about__content--style2"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <div className="about__icon">
                    <div className="about__icon-inner bg-transparent">
                      <img
                        src="/images/about/icon/1-dark.png"
                        alt="about-icon"
                        className="dark"
                      />
                    </div>
                  </div>
                  <div className="about__content-details">
                    <h5>NFT Staking</h5>
                    <p className="mb-0">
                      Secure your digital assets and earn rewards with our NFT
                      staking. Your tokens aren't just sitting idle; they're
                      working harder than a gold miner in a rush.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="about__content about__content--style2"
                data-aos="fade-right"
                data-aos-duration="900"
              >
                <div className="about__content-inner">
                  <div className="about__icon">
                    <div className="about__icon-inner bg-transparent">
                      <img
                        src="/images/about/icon/2-dark.png"
                        alt="about-icon"
                        className="dark"
                      />
                    </div>
                  </div>
                  <div className="about__content-details">
                    <h5>Token Staking</h5>
                    <p className="mb-0">
                      Stake your claim in the crypto world with our token
                      staking services. It's like planting a seed and watching
                      your digital garden grow.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="about__content about__content--style2"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="about__content-inner">
                  <div className="about__icon">
                    <div className="about__icon-inner bg-transparent">
                      <img
                        src="/images/about/icon/3-dark.png"
                        alt="about-icon"
                        className="dark"
                      />
                    </div>
                  </div>
                  <div className="about__content-details">
                    <h5>Cross Chain Technology</h5>
                    <p className="mb-0">
                      Travel across blockchain borders with ease. Our
                      cross-chain technology is the bridge over the wild rivers
                      of digital assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__thumb"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner mt-30 mt-lg-0">
                  <div className="  text-center">
                    <img
                      src="/images/Train.png"
                      alt="about-image"
                      // className="dark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__shape about__shape--style2">
        <span className="about__shape-item about__shape-item--1">
          <img src="/images/others/2.png" alt="shape-icon" />
        </span>
      </div>
    </section>
  );
};

export default About;
