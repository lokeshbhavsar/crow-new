/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import CountUp from 'react-countup';

function About() {
  return (
    <section className="about about--style1 ">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
            <div className="col-lg-6">
              <div
                className="about__thumb pe-lg-5"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="about__thumb-inner">
                  <img
                    // className="dark"
                    src="/images/crowboy (6).png"
                    alt="about-image"
                  />
                  <div className="floating-content__top-left">
                    {/* <div className="floating-content__item bg_color">
                      <h3>
                        {' '}
                        <span
                          className=""
                          data-purecounter-start="0"
                          data-purecounter-end="10"
                        >
                          <CountUp end={10} duration={10} />
                        </span>
                        Years
                      </h3>
                      <p>Consulting Experience</p>
                    </div> */}
                  </div>
                  <div className="floating-content__bottom-right">
                    {/* <div className="floating-content__item bg_color">
                      <h3>
                        {' '}
                        <span
                          className=""
                          data-purecounter-start="0"
                          data-purecounter-end="30"
                        >
                          <CountUp end={25} duration={5} />
                        </span>
                        K+
                      </h3>
                      <p>Satisfied Customers</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="about__content-inner">
                  <h2>
                    The <span>Wild West</span> Of Decentralization!
                  </h2>

                  <p className="mb-0">
                    At Crowboy Labs, we're a posse of professionals with a
                    dash of humor, a heap of information, and a welcoming smile.
                    Licensed, Doxxed, and KYC'd, we're the sheriffs of Web3
                    software, crafting a metaverse where crypto cowboys and
                    GameFi enthusiasts ride together. Our mission? To wrangle
                    the complexities of crypto and make it accessible to every
                    pioneer out there.
                  </p>
                  <Link
                    href="https://crowboys.info/"
                    target="_blank"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    Explore More{' '}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
