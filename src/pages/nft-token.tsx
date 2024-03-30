import { useState } from 'react';

const NftToken = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [sectionVisible1, setSectionVisible1] = useState(false);
  const [sectionVisible2, setSectionVisible2] = useState(false);

  return (
    <div className="nft-token">
      <div className="container">
        <div className="nft-token_cards_wrapper">
          <div className="nft-token_card">
            <div className="nft-token_cart_top">
           
                <img
                  src="/images/Coin_Slow (1).gif"
                  style={{
                    
                    width: '130px',
                    height: '130px',
                  }}
                  alt=""
                />
             
              <div>
                <h4 style={{marginTop:"20px"}}>$WILD Token</h4>
                {/* <p> $WILD</p> */}
                <p>
                  $WILD is a governance & utility token for the Crowboys GameFi
                  ecosystem. It boasts a first of its kind no-loss
                  collateralized model designed by Crowboy Labs and is governed
                  by a decentralization autonomous organization (DAO).
                </p>
              </div>
            </div>
            <div
              className="nft-token_cart_bottom"
              onClick={() => setSectionVisible((prev) => !prev)}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ color: '#fff' }}>0 Lp</span>
                <span>Staked</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ color: '#fff' }}>0.00 TYPAD</span>
                <span>Earned</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  gap: '10px',
                }}
              >
                <span
                  style={{
                    color: '#c3976a',
                    fontSize: '24px',
                    fontWeight: 'bold',
                  }}
                >
                  0%{' '}
                </span>
                <span>APY</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ color: '#fff' }}>$0.00</span>
                <span>LP Price</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ color: '#fff' }}>$0</span>
                <span>Total Value Locked</span>
              </div>
            </div>
            {sectionVisible && (
              <>
                <hr style={{ width: '100%', color: '#c3976a' }} />
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6">
                    <div className="farming__deposit">
                      <div className="farming__deposit-field">
                        <h6 className="form-label">Deposit</h6>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="0.00"
                            aria-label="Deposit input"
                            style={{
                              background: '#000',
                              color: '#c3976a',
                              borderTopLeftRadius: '10px',
                              borderBottomLeftRadius: '10px',
                            }}
                          />
                          <span className="input-group-text">max</span>
                        </div>
                        <div className="text-end">
                          <a href="#" className="launchpad-default-btn-view">
                            <span>Approve</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="farming__withdraw">
                      <div className="farming__withdraw-field">
                        <h6 className="form-label">Withdraw</h6>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            style={{
                              background: '#000',
                              color: '#c3976a',
                              borderTopLeftRadius: '10px',
                              borderBottomLeftRadius: '10px',
                            }}
                            placeholder="0.00"
                            aria-label="Withdraw input"
                          />
                          <span className="input-group-text">max</span>
                        </div>
                        <div className="text-end">
                          <a href="#" className="launchpad-default-btn-view">
                            <span>Withdraw</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="farming__claim">
                      <div className="farming__claim-title">
                        <h6>Pending Rewards</h6>
                        <h6 style={{ color: '#c3976a' }}>0.00 BUSD</h6>
                      </div>
                      <div className="text-end">
                        <a href="#" className="launchpad-default-btn-view">
                          <span>Claim</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NftToken;
