import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '500px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    border: '2px solid #c3976a',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Overlay background color (black with opacity)
  },
};
const DepositDetails = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div
      className="container"
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <div className="deposit-details">
        <div className="deposit-details-top">
          <div className="deposit-details-top-top">
            <h5 style={{marginTop:"10px"}}>Stake Crowboys Genesis Crates to earn wCRO token </h5>

            {/* <img
              src="/images/Crowboy (7).png"
              style={{
                borderRadius: '50px',
                width: '50px',
                height: '50px',
               objectFit:"contain",
            
              }}
              alt=""
            />
            <div style={{marginTop:"10px"}}>
              <FaArrowRight  />
            </div>
            <img
              src="/images/Crowboy (3).png"
              style={{
                borderRadius: '50px',
                width: '50px',
                height: '50px',
               objectFit:"contain",
              }}
              alt=""
            /> */}
          </div>
          <div className="deposit-details-top-bottom">
            <div
              className="farming__claim"
              style={{ height: '120px', backgroundColor: '#ffffff14' }}
            >
              <div className="farming__claim-title">
                <h6>Total Deposit</h6>
                <h6 style={{ color: '#c3976a' }}>0 NFT</h6>
              </div>
            </div>
            <div
              className="farming__claim"
              style={{ height: '120px', backgroundColor: '#ffffff14' }}
            >
              <div className="farming__claim-title">
                <h6>Poor Rate</h6>
                <h6 style={{ color: '#c3976a' }}>0.00 wCRO / week</h6>
              </div>
            </div>
            <div
              className="farming__claim"
              style={{ height: '120px', backgroundColor: '#ffffff14' }}
            >
              <div className="farming__claim-title">
                <h6>APR</h6>
                <h6 style={{ color: '#c3976a' }}>0%</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="deposit-details-bottom">
          <div
            className="farming__claim"
            style={{
              backgroundColor: '#ffffff14',
              height: '200px',
              marginBottom: '10px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <h6>Your NFT Deposits</h6>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#c3976a', fontSize: '25px' }}>0</span>
              <span style={{ color: '#fff' }}>Crowboys Genesis Crates</span>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#c3976a', fontSize: '25px' }}>$0</span>
              <span style={{ color: '#fff' }}>~USDC</span>
            </div>
          </div>
          <div
            className="farming__claim"
            style={{
              backgroundColor: '#ffffff14',
              height: '200px',
              marginBottom: '10px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <h6>Your unclaimed wCRO</h6>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#c3976a', fontSize: '25px' }}>0.0000</span>
              <span style={{ color: '#fff' }}>0.000 wCRO / week</span>
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <span style={{ color: '#c3976a', fontSize: '25px' }}>$0.00</span>
              <span style={{ color: '#fff' }}>~USDC</span>
            </div>
          </div>
          <div style={{ width: '100%', padding: '10px 0px' }}>
            <p style={{ color: 'gray' }}>
              This calculation is based on a NFT mint price of 490 CRO = $44
            </p>
          </div>
          <div style={{ width: '100%' }}>
            <p style={{ color: 'gray', cursor: 'pointer' }}>Project Website</p>
          </div>
          <div style={{ width: '100%' }}>
            <button
              style={{ cursor: 'pointer' }}
              onClick={openModal}
              className="deposit-details-btn"
            >
              Batch Deposit Crowboys Genesis Crates NFTs
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontSize: '17px',
                    fontWeight: 'bold',
                  }}
                >
                  Batch Deposit
                </span>
                <AiFillCloseCircle
                  style={{
                    color: '#fff',
                    fontSize: '17px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                  onClick={closeModal}
                />
              </div>

              <div
                style={{
                  width: '100%',
                  display: 'flex',
                      gap:"5px",
                  padding: '10px 0px 20px 0px',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '22px',padding:"10px", border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>

                <span
                  style={{
                    fontSize: '14px',
                    color: '#fff',
                    fontWeight: '300',
                  }}
                >
                  Select All NFTs
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
            
                margin:'0 auto !important',
                  gap: '10px',
                  flexWrap: 'wrap',
                  maxHeight: '300px',
                  overflowY: 'scroll',
                  textAlign:"center"
                }}
              >
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '30%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '30%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '30%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '30%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '30%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '30%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '30%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '30%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    border: '1px solid gray',
                    width: '31%',
                    height: '100px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ height: '100%',textAlign:"center" }}>
                    <div style={{ height: '70%' }}>
                      <img
                        src="/images/crowboy.png"
                        alt=""
                        style={{ height: '100%' }}
                      />
                    </div>
                    <div
                      style={{
                        height: '31%',
                        backgroundColor: '#c3976a',
                        display: 'flex',
                        alignItems: 'center',
                        gap:"5px",
                        justifyContent: 'center',
                      }}
                    >
                        <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '24px',
                  }}
                >
                  <input
                    style={{ height: '18px', border: '1px solid #c3976a' }}
                    type="checkbox"
                  />
                </span>
                <span style={{fontSize:"13px",color:"#fff"}}>#3611</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{width:"100%",display:"flex",paddingTop:"20px",gap:"10px"}}>
               <div style={{width:"47%",background:"#77dd77",padding:"10px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{color:"#2C692D"}}>Approve</div>
               </div>
           
               <div style={{width:"47%",background:"#c3976a",padding:"10px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:'center'}}>
                <div style={{color:"#fff"}}>Deposit</div>
               </div>
              </div>
            </Modal>
          </div>
          <div style={{ width: '100%', padding: '10px 0px' }} className="deposit-detail-p">
            <p style={{ color: 'gray' }}>
              2076 Crowboys Genesis Crates NFTs available
            </p>
          </div>
          <div style={{ width: '100%' }} className="deposit-detail-p">
            <p style={{ color: 'gray', cursor: 'pointer' }}>
              1wCRO = 0.000 USDC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DepositDetails;
