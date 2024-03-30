/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
function GettingStart() {
  return (
    <section className="getting_start padding-top padding-bottom">
      <div className="section-header section-header--max50">
        <h5 className="mb-15 mt-minus-5 start-color">
          <span>Getting Started</span>
        </h5>
        <h2>Simple as 1,2,3</h2>
        <img src="images/logo/logo.png" alt="" width={100} height={100} />
      </div>
      <div className="container">
        <div className="getting_start__wrapper">
          <div className="row g-4 ">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div
                className="getting_start__item getting_start__item--style1"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="getting_start__item-inner text-center">
                  <div className="getting_start__item-thumb mb-30">
                    <img
                      // className="dark"
                      src="/images/Crowboy (4).png"
                      alt="getting_start-icon"
                    />
                  </div>
                  <div className="getting_start-content">
                    <h5 className="mb-15">
                      {' '}
                      <a
                        className="stretched-link"
                        
                      >
                        1. Advanced Security
                      </a>{' '}
                    </h5>
                    <p className="mb-0">
                      Your security is our top priority. Like the vaults of old
                      Western banks, our platform is fortified with the latest
                      security measures to protect your assets from bandits.
                      Rest easy knowing your investments are under the watchful
                      eye of Crowboys Finance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div
                className="getting_start__item getting_start__item--style1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="getting_start__item-inner text-center">
                  <div className="getting_start__item-thumb mb-30">
                    <img
                      // className="dark"
                      src="/images/Crowboy (10).png"
                      alt="getting_start-icon"
                    />
                  </div>
                  <div className="getting_start-content">
                    <h5 className="mb-15">
                      {' '}
                      <a
                        className="stretched-link"
                  
                      >
                        {' '}
                        2. Technological Innovation
                      </a>{' '}
                    </h5>
                    <p className="mb-0">
                      Harness the power of cutting-edge technology with Crowboys
                      Finance. Our platform is built for speed, efficiency, and
                      security, ensuring your transactions are as smooth as a
                      saloon's piano tune. With our innovative spirit, we're
                      constantly pushing the boundaries of what's possible in
                      the crypto frontier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div
                className="getting_start__item getting_start__item--style1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="getting_start__item-inner text-center">
                  <div className="getting_start__item-thumb mb-30">
                    <img
                      // className="dark"
                      src="/images/crowboy (7).png"
                      alt="getting_start-icon"
                    />
                  </div>
                  <div className="getting_start__content">
                    <h5 className="mb-15">
                      {' '}
                      <a
                        className="stretched-link"
                     
                      >
                        3. Community First
                      </a>{' '}
                    </h5>
                    <p className="mb-0">
                      We believe community stands above all else and the only
                      way forward is to create a place where every voice is
                      heard, and every member is valued. We're not just a
                      platform; we're a family of enthusiasts committed to
                      shaping the future of finance. Your journey to the top of
                      the Most Wanted list starts here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GettingStart;
