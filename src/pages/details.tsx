import Link from 'next/link';
const Details = () => {
  return (
    <div className="container details-page">
      <div className="details-page-wrapper">
        <div className="row g-4 ">
          <div className="col-sm-6 col-lg-6">
            <div
              className="getting_start__item getting_start__item--style1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                // className="dark"
                src="/images/Crowboy (4).png"
                alt="getting_start-icon"
              />
            </div>
          </div>
          <div className="col-sm-6 col-lg-6">
            <div
              className="getting_start__item getting_start__item--style1"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="details-right-top">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <img
                    src="/images/Coin_Slow (1).gif"
                    style={{
                      borderRadius: '50%',
                      width: '130px',

                      objectFit: 'cover',
                    }}
                    alt=""
                  />

                  <div style={{ width: '100%', display: 'flex',gap:"10px" }}>
                    <div className="eb-de_countdown text-center css-v7v99c">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="address-card"
                        className="svg-inline--fa fa-address-card chakra-icon css-13otjrl"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                        ></path>
                      </svg>{' '}
                      Doxxed
                    </div>
                    <div className="eb-de_countdown text-center css-v7v99c">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="user-shield"
                        className="svg-inline--fa fa-user-shield chakra-icon css-13otjrl"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c1.8 0 3.5-.2 5.3-.5c-76.3-55.1-99.8-141-103.1-200.2c-16.1-4.8-33.1-7.3-50.7-7.3H178.3zm308.8-78.3l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48c-5.7-2.3-12.1-2.3-17.8 0zM591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7V273.8L591.4 312z"
                        ></path>
                      </svg>{' '}
                      KYC
                    </div>
                  </div>
                </div>

                <div className="details-top-right-right">
                  <h3 style={{ marginTop: '15px' }}>The Future Is WILD! </h3>
                  <ul
                    className="social social-community"
                    style={{ justifyContent: 'left' }}
                  >
                    <li className="social__item">
                      <Link
                        scroll={false}
                        href="https://twitter.com/Crowboylabs"
                        target="_blank"
                        className="social__link social__link--style22 "
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li className="social__item">
                      <Link
                        scroll={false}
                        href="https://t.me/crowboys"
                        target="_blank"
                        className="social__link social__link--style22"
                      >
                        <i className="fa-brands fa-telegram"></i>
                      </Link>
                    </li>

                    <li className="social__item">
                      <Link
                        scroll={false}
                        href="https://crowboys.info/"
                        target="_blank"
                        className="social__link social__link--style22"
                      >
                        <i className="fa-solid fa-gamepad"></i>
                      </Link>
                    </li>

                    <li className="social__item">
                      <Link
                        scroll={false}
                        href="https://www.linkedin.com/company/crowboys"
                        target="_blank"
                        className="social__link social__link--style22"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>

                    <li className="social__item">
                      <Link
                        scroll={false}
                        href="https://discord.gg/crowboys-labs-932735740423598130"
                        target="_blank"
                        className="social__link social__link--style22"
                      >
                        <i className="fa-brands fa-discord"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="details-right-center">
                <div className="details-right-center-1">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      Mint Price
                    </span>
                    <span
                      style={{
                        fontSize: '24px',
                        color: '#fff',
                        fontWeight: 'bold',
                      }}
                    >
                      {' '}
                      $0.50
                    </span>
                  </div>
                </div>
                <div className="details-right-center-2">
                  <p style={{ color: '#fff' }}>
                    {' '}
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                      Limit:
                    </span>{' '}
                    TBA
                  </p>
                </div>
                <div className="details-right-center-3">
                  {/* <span>
                    Users must have 1,000 Mitama for Mitama price. Earn more by
                    staking{' '}
                  </span> */}
                  {/* <span>
                    $Fortune in{' '}
                    <span style={{ color: '#c3976a', cursor: 'pointer' }}>
                      Ryoshi Dynasties
                    </span>
                  </span> */}
                </div>
                <div className="details-right-center-4">
                  <span
                    style={{
                      fontWeight: 'bold',
                      color: '#fff',
                      fontSize: '18px',
                    }}
                  >
                    0 minted
                  </span>
                  <div
                    className="progress"
                    style={{
                      height: '5px',
                      width: '100%',
                      borderRadius: '1px',
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '25%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="details-right-center-5">
                  <span
                    style={{
                      fontWeight: '100',
                      color: '#fff',
                      fontSize: '20px',
                      textTransform: 'capitalize',
                    }}
                  >
                    Mint Date: TBA
                  </span>
                </div>
                <div style={{width:"100%",display:'flex',justifyContent:"center"}}>
                <div className="eb-de_countdown text-center css-v7v99c" style={{marginTop:"0px"}}>
                 
                      Mint
                    </div>
                </div>
              </div>
              <div>
                <h3>
                  <strong>Overview</strong>
                </h3>
                <p
                  style={{
                    fontWeight: '300',
                    color: '#eeeeee',
                    fontSize: '17px',
                    lineHeight: '30px',
                  }}
                >
                  Do you remember your first entry into Cryptocurrency? Was it
                  the big daddy BTC or some degen coin with 1000000% APY that
                  rugged you overnight? Either way, investing in a volatile
                  market that trades 24/7 can be both overwhelming and scary for
                  many. Our goal as Crowboys has always been to assist
                  onboarding into crypto via a GameFi experience. What if this
                  can be done with a tokenized system – which guarantees a
                  return over time and a token value that never goes down? If
                  your first foray into crypto was a zero-loss coin, would that
                  make you look deeper, feel safer, more confident? Probably –
                  which is why we’re super excited to launch our YEEHAW up only
                  $WILD $WEST ecosystem!
                </p>
              </div>

              <h3 style={{ marginTop: '20px' }}>
                <strong>Details</strong>
              </h3>
              <ul className="details-collection-overview">
                <li style={{ listStyle: 'none' }}>⍟ Price: $0.50 USDC</li>
                <li style={{ listStyle: 'none' }}>⍟ Launch Date: TBA</li>
                <li style={{ listStyle: 'none' }}>⍟ Minting Policy: TBA</li>
                <li style={{ listStyle: 'none' }}>⍟ Circulating Supply: 0</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>
                <strong>Why Participate?</strong>
              </h3>
              <ul className="details-collection-overview">
                <li style={{ listStyle: 'none' }}>
                  We have taken all of our many and crazy years of Web2/3,
                  engineering, academic, and professional experience and mixed
                  it with our hearts and souls to build what we believe to be
                  the most unique DeFi system ever proposed in such a state. Our
                  goal was not to simply fork, copy, and emulate what was done
                  before, but instead utilize the wisdom we have gained through
                  trial and error to solve real world issues that face the
                  systems we all utilize today. Nothing is of course perfect,
                  but we know this is the first step into a new world where...
                  The Future Is WILD!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
