import Link from "next/link";
const Launchpad = () => {
  return (
    <>
      <div className="launchpad">
        <div className="launchpad-top">
          <h6 className="launchpad-title">
            <span style={{ color: '#c3976a' }}>Projects</span>
          </h6>
          <h3 className="launchpad-description">Upcoming ICOs</h3>
          <img src="images/logo/logo.png" alt="" width={60} height={50} />
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card launchpad-card mb-4">
              

                <img
                  className="launchpad-card-img"
                  src="/images/stake-background.jpg"
                  alt=""
                  style={{
                    width: '100%',
                    height:"350px",
                    borderTopRightRadius: '25px',
                    borderTopLeftRadius: '25px',
                    objectFit:"cover"
                  }}
                />
                <div className="launchpad-card-bottom">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0px 20px',
                      marginTop: '-60px',
                    
                    }}
                  >
                
                     <video
                        className="launchpad-card-img"
                        src="/images/question.gif"
                        
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '20px',
                        }}
                      />
                   
                    <div
                      style={{
                        flex: 1,
                        background: '#c3976a',
                        borderRadius: '25% 25% 25% 25% / 1% 68% 0% 4%',
                        height: '30px',
                        width: '50px',
                        padding: '0px 20px',
                      }}
                    >
                      <span style={{ color: '#fff', fontSize: '15px' }}>
                        {' '}
                        Genesis PFPs
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '15px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Price
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                  $0.50
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '15px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Round
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      Public
                    </span>
                  </div>
                  {/* <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Participent
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      0
                    </span>
                  </div> */}
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Project Start
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      TBA
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                    Circulating Supply
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                     0
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px 0px 15px',
                    }}
                  >
                    {/* <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Raised Amount
                    </span> */}
                  </div>
                  <div
                    style={{ width: '100%', padding: '10px 15px 10px 15px' }}
                  >
                 
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '25%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{ width: '100%', padding: '10px 15px 10px 15px' }}
                  >
                    <Link href="/nft-details" className="launchpad-default-btn">
                      <span>Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="launchpad-second">
        <div
          className="container d-flex justify-content-between align-items-center "
          style={{ width: '100%' }}
        >
          <div className="launchpad-top-second">
            <h6 className="launchpad-title">
              <span style={{ color: '#c3976a' }}>Completed</span>
            </h6>
            <h3 className="launchpad-description">Previous ICOs</h3>
          </div>
          {/* <Link href="#" className="launchpad-default-btn-view">
            <span>View Rank</span>
          </Link> */}
        </div>
        <div className="container">
          <div className="row mt-4">
          
          <div className="col-lg-4 col-md-6 col-sm-12">
              {/* <div className="card launchpad-card mb-4">
                <div
                  style={{
                    border: '2px solid #c3976a',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '25px',
                  }}
                >
                  <img
                    src="/images/4 (2).png"
                    style={{
                      borderRadius: '25px',
                    }}
                    alt=""
                  />
                </div>

                <img
                  className="launchpad-card-img"
                  src="/images/05.jpg"
                  alt=""
                  style={{
                    width: '100%',
                    borderTopRightRadius: '25px',
                    borderTopLeftRadius: '25px',
                  }}
                />
                <div className="launchpad-card-bottom">
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0px 20px',
                      marginTop: '-40px',
                    }}
                  >
                    <div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '20px',
                        border: '1px solid #c3976a',
                      }}
                    >
                      <img
                        className="launchpad-card-img"
                        src="/images/04.jpg"
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '20px',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        flex: 1,
                        background: '#c3976a',
                        borderRadius: '25% 25% 25% 25% / 1% 68% 0% 4%',
                        height: '30px',
                        width: '50px',
                        padding: '0px 20px',
                      }}
                    >
                      <span style={{ color: '#fff', fontSize: '15px' }}>
                        {' '}
                        Tork DEX
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '15px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Round name:
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      Public
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Participent
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      42
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Project Start
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      TBA
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '10px 15px 0px 15px',
                    }}
                  >
                    <span style={{ color: '#cccccc', fontSize: '15px' }}>
                      Raised Amount
                    </span>
                  </div>
                  <div
                    style={{ width: '100%', padding: '10px 15px 10px 15px' }}
                  >
                    <span style={{ color: '#c3976a', fontSize: '15px' }}>
                      {' '}
                      5000 / 15000 BUSD{' '}
                    </span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '25%' }}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div
                    style={{ width: '100%', padding: '10px 15px 10px 15px' }}
                  >
                    <Link href="/details" className="launchpad-default-btn">
                      <span>Details</span>
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="launchpad-third">
        <div
          className="container "
          style={{ width: '100%', textAlign: 'center' }}
        >
          <nav aria-label="Page navigation example">
            <ul
              className="pagination"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <li className="page-item">
                <a className="page-link">
                  <span style={{ color: '#c3976a' }}>&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a style={{ color: '#c3976a' }} className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a style={{ color: '#c3976a' }} className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a style={{ color: '#c3976a' }} className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link">
                  <span style={{ color: '#c3976a' }}>&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Launchpad;
