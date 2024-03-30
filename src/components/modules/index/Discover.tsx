/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaAngleRight } from 'react-icons/fa';

function Discover() {
  return (
    <section className="discover  ">
      <div className="container">
        <h2 className="text-center">
          Discover the <span>Ecosystem</span>
        </h2>

        <div className="discover__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
            <div className="col-lg-3">
              <div
                className="discover__thumb pe-lg-8"
                data-aos="fade-right"
                data-aos-duration="800"
                style={{width:"100%"}}
              >
                {/* <div className="discover__thumb-inner"> */}
                  {/* <div className="discover__thumb-image floating-content"> */}
                  <div style={{width:"100%"}}>
                    <img
                      // className="dark" 
                      src="/images/Crowboy (7).png"
                      alt="discover-image"
                      style={{marginLeft:"-70px", width:"500px", height:"400px", marginTop:"0px",objectFit:"contain"}}
                    />
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <h3 className="text-start">Trade</h3>
              <div
                className="discover__content "
                style={{ display: 'flex', alignSelf:'center' }}
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="discover__content-inner">
                  <img
                    className="discover_img"
                    src="/images/Crowboy (4).png"
                    alt="discover-image"
                  />
                  <h6>Swap</h6>

                  <p className="mb-3">
                    Trade crypto instantly across multiple chains
                  </p>
                  <Link href="discover" className="discover_btn ">
                    Trade Now{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>

                <div className="discover__content-inner">
                  <img
                    className="discover_img"
                    src="/images/Crowboy (4).png"
                    
                    alt="discover-image"
                  />
                  <h6>Liquidity</h6>

                  <p className="mb-3">
                    Fund liquidity pools, earn trading fees{' '}
                  </p>
                  <Link href="discover" className="discover_btn ">
                    Add Now{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>

                <div className="discover__content-inner">
                  <img
                    className="discover_img"
                    src="/images/Crowboy (4).png"
                    
                    alt="discover-image"
                  />
                  <h6>Bridge</h6>

                  <p className="mb-3">
                    Seamlessly transfer assets across chains{' '}
                  </p>
                  <Link href="discover" className="discover_btn ">
                    Bridge Now{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>

                <div className="discover__content-inner">
                  <img
                    className="discover_img"
                    src="/images/Crowboy (4).png"
                    
                    alt="discover-image"
                  />
                  <h6>Perpetual</h6>

                  <p className="mb-3">
                    Trade endlessly without expiration dates{' '}
                  </p>
                  <Link href="discover" className="discover_btn ">
                    Trade Now{' '}
                    <span>
                      <FaAngleRight />
                    </span>
                  </Link>
                </div>

                <div className="discover__content-inner">
                  <img
                    className="discover_img"
                    src="/images/Crowboy (4).png"
                    
                    alt="discover-image"
                  />
                  <h6>Buy Crypto</h6>

                  <p className="mb-3">
                    Buy crypto with your preferred currency and payment method{' '}
                  </p>
                  <Link href="discover" className="discover_btn ">
                    Buy Now{' '}
                    <span>
                      <FaAngleRight />
                    </span>
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

export default Discover;
