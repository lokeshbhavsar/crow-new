import Link from 'next/link';
const NFTDetails = () => {
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
                src="images/crowboy.png"
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
                  <div style={{width:"150px",  border: "2px solid #c3976a",borderRadius:"50%"}}>
                  <video
                    src="/images/question.gif"
                    style={{
                      borderRadius: '50%',
                      width: '100%',
                        height:"100%",
                        display:"block"
                    }}
                   
                  />
                  </div>
                 
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
                      TBA
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
                  You rock up to West City – you like the look of the place, and
                  there’s plenty going on to pique your interest. You can stay a
                  while, explore the surrounding areas, prospect for gold, play
                  some cards, maybe even set up a store and try your hand at
                  retailing! You hope to keep your nose out of trouble, or maybe
                  you’re looking for some? Perhaps you’re just passing through –
                  a quick drink, sample the local brothel and away you go, never
                  to be seen again, or ending up being skinned alive by the
                  natives…
                </p>
              </div>

              <h3 style={{ marginTop: '20px' }}>
                <strong>Details</strong>
              </h3>
              <ul className="details-collection-overview">
                <li style={{listStyle:"none"}}>⍟ Total Supply: 3000</li>
                <li style={{listStyle:"none"}}>⍟ Launch Date: TBA</li>
                <li style={{listStyle:"none"}}>⍟ Standard Price: TBA</li>
                <li style={{listStyle:"none"}}>⍟ Discounted Price: TBA</li>
                <li style={{listStyle:"none"}}>⍟ Minting Policy: TBA</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>
                <strong>Why Participate?</strong>
              </h3>
              <ul className="details-collection-overview">
                <li style={{ listStyle: 'none' }}>
                  This is it, what everyone has been waiting for! After a long 2
                  years since the launch of Cronos Chain and the Crowboys began
                  their journey, many have waited patiently for the release of
                  the first official Genesis PFP collection! This has been a
                  long time coming as many loyal Cronos fans have longed for a
                  Crowboy PFP they can call their own and build their own unique
                  identity around. This collection is extremely special with
                  each pieces base being meticulously hand drawn and
                  artistically driven with the utmost quality and care. There
                  will never be another collection like it as this marks the
                  beginning of phase 2, the launch of our public GameFi Alpha
                  Want3d! We promised as an organization there would never be
                  anything for sale in the Crowboys ecosystem without first
                  delivering on our roadmap. Now that time has come and this is
                  your chance to get in on the most $WILD adventure Web3 has
                  ever seen. YEEEEHAWWW!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NFTDetails;
