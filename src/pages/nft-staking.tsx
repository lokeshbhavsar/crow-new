import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
const NftStaking = () => {


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
  return (
    <div style={{paddingTop:"200px"}}>
          <div className="launchpad-second">
    <div className="container d-flex justify-content-between align-items-center " style={{width:"100%"}}>
    <div className="launchpad-top-second">
      <h6 className="launchpad-title">
        <span style={{color:"#c3976a"}}>NFT STAKING </span>
      </h6>
      <h2 className="launchpad-description">All NFT projects to Stake</h2>
    
    </div>
    {/* <Link href="#" className="launchpad-default-btn-view">
                  <span>View Rank</span>
                </Link> */}
    </div>
    <div className="container" style={{width:"100%",gap:"10px"}}>
      <div className="row mt-4" style={{width:"100%",gap:"10px"}}>
     
       <div className="col-lg-4 col-md-6 col-sm-12" style={{width:"100%"}}>
          <div className="card launchpad-card-2 mb-4">
           
            
           <div style={{height:"250px"}}>
           <video

            
src="/images/video_1280_1.mp4"

style={{
  padding:"0px",
  margin:"0px",
  width: '100%',
height:"100%",
objectFit:"cover",
  borderTopRightRadius: '25px',
  borderTopLeftRadius: '25px',
}}
/>
           </div>
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
                    src="/images/stake-image.jpg"
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
                    Genesis Crates
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
                      Total Deposit
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      0 NFTs
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
                      Pool Rate
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      0 / Week
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
                      APR
                    </span>
                    <span
                      style={{
                        color: '#c3976a',
                        fontSize: '15px',
                        fontWeight: 'bold',
                      }}
                    >
                      0%
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
              <div style={{ width: '100%', padding: '10px 15px 10px 15px' }}>
                <span style={{ color: '#c3976a', fontSize: '15px' }}>
                  {' '}
                  0 / 0 $WEST
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
              <div style={{ width: '100%', padding: '10px 15px 10px 15px' }}>
              <Link href="/deposit-details" className="launchpad-default-btn">
                  <span>Deposit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
       
       
     
    
      </div>
    </div>

 
  </div>
    </div>
  )
}
export default NftStaking