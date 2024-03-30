export default function GetStarted() {
  return (
    <>
      <section
        className="stacking padding-top"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="section-header text-center">
          <h2>
            Begin Your<span className="style3"> Adventure</span>
          </h2>
        </div>
        <div className="container">
          <div className="stacking__wrapper">
            <div className="stacking__project">
              <div className="row g-4 d-flex justify-content-around mb-100">
                <div className="col-lg-3 col-sm-6 rect-gradient p-3">
                  <h3>
                    ${' '}
                    <span
                      className="purecounter"
                      data-purecounter-start="639499"
                      data-purecounter-end="63939379"
                    >
                      6,368,143.24
                    </span>{' '}
                  </h3>
                  <p>Cowboys Accounts</p>
                </div>
                <div className="col-lg-3 col-sm-6 rect-gradient p-3">
                  <h3>
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="136.99"
                    >
                      136
                    </span>
                    .99 %
                  </h3>
                  <p>Marketplace Coins</p>
                </div>
                <div className="col-lg-3 col-sm-6 rect-gradient p-3">
                  <h3>
                    <span
                      className="purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="69899"
                    >
                      69899
                    </span>{' '}
                  </h3>
                  <p>Transactions Every day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="stacking padding-bottom"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="section-header section-header--middle text-center">
          <h2 className="section-header__subtitle">
            {' '}
            Get <span>Started</span>{' '}
          </h2>
        </div>
        <div className="container cta">
          <div className="work__wrapper">
            <div className="row d-flex justify-content-around g-4">
              <div className="col-lg-3 col-sm-6 rect-gradient p-3">
                <div className="work__item">
                  <div className="work__item-inner">
                    <div className="work__item-thumb text-center pb-3">
                      <img
                        src="/images/crowboy (4).png"
                        alt="work Step 1 Image"
                      />
                    </div>
                    <div className="work__item-content">
                      <h4>1. Protected Wallet</h4>
                      <p>
                        All your third party data are controlled and protected
                        by the end-to-end encryption, and always you can check
                        that anyone have the access to your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 rect-gradient p-3">
                <div className="work__item">
                  <div className="work__item-inner">
                    <div className="work__item-thumb text-center pb-3">
                      <img
                        src="/images/crowboy (10).png"
                        alt="work Step 2 Image"
                      />
                    </div>
                    <div className="work__item-content">
                      <h4>2. Advanced security</h4>
                      <p>
                        All your third party data are controlled and protected
                        by the end-to-end encryption, and always you can check
                        that anyone have the access to your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 rect-gradient p-3">
                <div className="work__item">
                  <div className="work__item-inner">
                    <div className="work__item-thumb text-center pb-3">
                      <img
                        src="/images/Crowboy (2).png"
                        alt="work Step 3 Image"
                      />
                    </div>
                    <div className="work__item-content">
                      <h4>3. High level of security</h4>
                      <p>
                        All your third party data are controlled and protected
                        by the end-to-end encryption, and always you can check
                        that anyone have the access to your data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
