import Link from 'next/link';

import ScrollToTop from 'react-scroll-to-top';


function Footer() {
  return (
    <>
      <footer className="footer brand-1">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top footer__top--style1">
              <div className="row gy-5" style={{display:"flex",alignItems:"center"}}>
                <div className="col-md-6">
                  <div className="footer__about">
                    <Link href="/" className="footer__about-logo">
                      <img   src="/images/new-crowboys.png" alt="Logo"  style={{width:"200px",height:"70px",objectFit:"cover"}}     />
                    </Link>
                    <p className="footer__about-moto ">
                    Crowboy Labs is a software company specializing in the development of blockchain and gaming technologies.
                    </p>
                    {/* <div className="bg_width">
                      <div className="bg_width_a">
                        <a href={'https://www.apple.com/app-store/'}>
                          <div className="bg_width_A">
                            <div style={{ alignSelf: 'center' }}>
                              <img
                                src="/images/apple.png"
                                className=" app_img"
                              />
                            </div>
                            <div className="apple">
                              <span className=" span">Download on the</span>
                              <p className="apple_text">Apple Store</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="bg_width_b">
                        <a href="https://www.apple.com/app-store/">
                          <div className="bg_width_B">
                            <div style={{ alignSelf: 'center' }}>
                              <img
                                src="./images/googleplay.png"
                                className="google_img"
                              />
                            </div>
                            <div className="google">
                              <span className="span">GET IT ON</span>
                              <p className="google_text">Google Play</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-4">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Quick links</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <span onClick={() => console.log("it runs")}>test</span>
                        <li className="footer__linklist-item" >
                          {' '}
                          
                          <Link href="https://docs.crowboys.org/" target='_blank'>About Us</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {' '}
                          <Link href="https://docs.crowboys.org/team/team" target='_blank'>Teams</Link>
                        </li>
                        <li className="footer__linklist-item">
                          {' '}
                          <Link href="https://docs.crowboys.org/the-game/description" target='_blank'>Game</Link>{' '}
                        </li>
                        <li className="footer__linklist-item">
                          {' '}
                          <Link scroll={false} href="https://docs.crowboys.org/tokenomics/tokenomics" target="_blank">
                          Tokenomics
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-8" style={{display:"flex",flex:1,alignItems:"center"}}>
                <img src="/images/footer/well.png" alt="well image" style={{width:"300px",height:"250px"}} />
                </div>
                
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__end">
                <div className="footer__end-copyright">
                  <p className=" mb-0">
                    © 2024 All Rights Reserved{' '} 
                    <Link
                      href="https://crowboys.info"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Crowboy Labs
                    </Link>{' '}
                  </p>
                </div>
                <div>
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
          </div>
        </div>
        <div className="footer__shape">
          <span className="footer__shape-item footer__shape-item--1">
            {/* <img src="images/footer/1.png" alt="shape icon" /> */}
          </span>
          <span className="footer__shape-item footer__shape-item--2">
            {' '}
            <span></span>{' '}
          </span>
        </div>
      </footer>
      <ScrollToTop
        color="#fff"
        smooth
        height="16px"
        width="14px"
        className="scrollToTop scrollToTop--home1"
        viewBox="0 0 448 512"
        svgPath="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3V320c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 53 43 96 96 96H352c53 0 96-43 96-96V352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V352z"
      />
    </>
  );
}

export default Footer;
