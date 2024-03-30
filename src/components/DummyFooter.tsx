import Link from 'next/link';
const DummyFooter = () => {
  return (
    <div className="container footer-main" style={{ width: '100%' }}>
      <div className="row " style={{ display: 'flex', alignItems: 'center' }}>
        <div className="col-md-6 col-sm-12">
          <div className="footer__about">
            <Link href="/" className="footer__about-logo">
              <img
                src="/images/new-crowboys.png"
                alt="Logo"
                style={{ width: '200px', height: '70px', objectFit: 'cover' }}
              />
            </Link>
            <p className="footer__about-moto ">
              Crowboy Labs is a software company specializing in the development
              of blockchain and gaming technologies.
            </p>
          </div>
        </div>
        <div className="col-md-2 col-sm-12 ">
          <div className="footer__links">
            <div className="footer__links-tittle">
              <h6>Quick links</h6>
            </div>
            <div className="footer__links-content">
              <ul className="footer__linklist footer-links-ul">
                <li className="footer__linklist-item footer-links-li">
                  {' '}
                  <Link href="https://docs.crowboys.org/" target="_blank">
                    About Us
                  </Link>
                </li>
                <li className="footer__linklist-item">
                  {' '}
                  <Link
                    href="https://docs.crowboys.org/team/team"
                    target="_blank"
                  >
                    Teams
                  </Link>
                </li>
                <li className="footer__linklist-item">
                  {' '}
                  <Link
                    href="https://docs.crowboys.org/the-game/description"
                    target="_blank"
                  >
                    Game
                  </Link>{' '}
                </li>
                <li className="footer__linklist-item">
                  {' '}
                  <Link
                    scroll={false}
                    href="https://docs.crowboys.org/tokenomics/tokenomics"
                    target="_blank"
                  >
                    Tokenomics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col-md-2 col-sm-12 "
          style={{ display: 'flex', flex: 1, alignItems: 'center',justifyContent:"center" }}
        >
          <img
            src="/images/footer/Well.png"
            alt="well image"
            style={{ width: '300px', height: '250px' }}
          />
        </div>
      </div>
    </div>
  );
};
export default DummyFooter;
