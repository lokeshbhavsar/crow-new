import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { BLOCKCHAIN_NAME, BlockchainName, CHAIN_TYPE, CrossChainTrade, OnChainTrade, SDK, LifiTrade, AlgebraTrade, OpenOceanTrade } from "rubic-sdk";
import { configuration } from "../constants/sdk-config";
import useAsyncEffect from 'use-async-effect';
import SwapBlock from '@/sdkfiles/SwapBlock';
import { useAccount } from 'wagmi';

export default function Home() {
  const [toggle, setToggle] = useState(0);
  const [Open, setOpen] = useState(false);
  const toggleRef = useRef<any>();

  const changeToggle = (index) => {
    setToggle(index);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [loading, setLoading] = useState(true);
  const { address } = useAccount()
  const [sdk, setSdk] = useState<SDK | null>(null);
  const [selectedcurrency1, setSelectedcurrency1] = useState(0);
  const [selectedcurrency2, setSelectedcurrency2] = useState(4);
  const [selectedToken1, setSelectedToken1] = useState({ index: 0, blockchain: "", address: "" });
  const [selectedToken2, setSelectedToken2] = useState({ index: 0, blockchain: "", address: "" });
  const [inputTokenAmount, setInputTokenAmount] = useState<any>(0)
  const [bestTrade,setBestTrade] = useState<any>()
  const [outputTokenAmount,setOutputTokenAmount] = useState("")
  console.log("setSelectedToken1", selectedToken1);
  console.log("setSelectedToken2", selectedToken2);
  console.log("inputTokenAmount", inputTokenAmount);

  const [Token1, setToken1] = useState([]);
  const [Token2, setToken2] = useState([]);

  useEffect(() => {
    setOutputTokenAmount("")
  }, [selectedToken1, selectedToken2, inputTokenAmount])

  const FilterCategoryToken1 = (category) => {
    setToken1(
      TokenData.filter((item) => {
        return item.category === category;
      }),
    );
  };

  const FilterCategoryToken2 = (category) => {
    setToken2(
      TokenData.filter((item) => {
        return item.category === category;
      }),
    );
  };

  useAsyncEffect(async () => {
    setSdk(await SDK.createSDK(configuration));
  }, [SDK])

  useAsyncEffect(async () => {
    try {
      const newConfig: any = {
        ...configuration,
        walletProvider: {
          [CHAIN_TYPE.EVM]: {
            core: window.ethereum,
            address
          }
        }
      };
      if (sdk?.updateConfiguration) {
        await sdk?.updateConfiguration(newConfig);
      }
    } finally {
    }
  }, [address, sdk])

  useEffect(() => {
    // Fetch data from the first category of TokenData and set it to Token2
    const firstCategoryTokens1 = TokenData.filter(
      (item) => item.category === 'ethereum',
    );
    setToken1(firstCategoryTokens1);
    // Fetch data from the first category of TokenData and set it to Token2
    const firstCategoryTokens2 = TokenData.filter(
      (item) => item.category === 'polygon',
    );
    setToken2(firstCategoryTokens2);

    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array to run this effect only once on component mount

  const CurrencyData = [
    {
      id: 0,
      img: 'images/banner/home1/logo.webp',
      name: 'Ethereum',
      category: 'ethereum',
    },
    {
      id: 1,
      img: 'images/banner/home1/solana.svg',
      name: 'Solana',
      category: 'solana',
    },
    {
      id: 2,
      img: 'images/banner/home1/bnb.svg',
      name: 'BNB Chain',
      category: 'bnb',
    },
    {
      id: 3,
      img: 'images/banner/home1/avalanche.svg',
      name: 'Avalanche',
      category: 'avalanche',
    },
    {
      id: 4,
      img: 'images/banner/home1/logo2.webp',
      name: 'Polygon',
      category: 'polygon',
    },
    {
      id: 5,
      img: 'images/banner/home1/arbitrum.svg',
      name: 'Arbitrum',
      category: 'arbitrum',
    },
  ];
  const TokenData = [
    {
      id: 0,
      img: 'images/banner/home1/logo.webp',
      sname: 'ETH',
      name: 'Ethereum',
      category: 'ethereum',
      address: '0x0000000000000000000000000000000000000000',
      blockchain: BLOCKCHAIN_NAME.ETHEREUM,
    },
    {
      id: 1,
      img: 'images/banner/home1/logo2.webp',
      sname: 'MATIC',
      name: 'Polygon',
      category: 'polygon',
      address: '0x0000000000000000000000000000000000000000',
      blockchain: BLOCKCHAIN_NAME.POLYGON,
    },
    {
      id: 3,
      img: 'images/banner/home1/Wrapped.webp',
      sname: 'WETH',
      name: 'Wrapped Ether',
      category: 'ethereum',
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      blockchain: BLOCKCHAIN_NAME.ETHEREUM,
    },
    {
      id: 4,
      img: 'images/banner/home1/tether.webp',
      sname: 'USDT',
      name: 'Tether USD',
      category: 'ethereum',
      address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      blockchain: BLOCKCHAIN_NAME.ETHEREUM,
    },
    {
      id: 5,
      img: 'images/banner/home1/solana.svg',
      sname: 'SOL',
      name: 'Sonala',
      category: 'solana',
      address: '0xfea6ab80cd850c3e63374bc737479aeec0e8b9a1',
      blockchain: BLOCKCHAIN_NAME.SOLANA,
    },
    {
      id: 6,
      img: 'images/banner/home1/usd.webp',
      sname: 'USDC',
      name: 'USD Coin (SOL)',
      category: 'solana',

    },
    {
      id: 7,
      img: 'images/banner/home1/render.webp',
      sname: 'RENDER',
      name: 'Render Token',
      category: 'solana',
    },
    {
      id: 8,
      img: 'images/banner/home1/bnb.svg',
      sname: 'BNB',
      name: 'Binance coin',
      category: 'bnb',
      address: '0x0000000000000000000000000000000000000000',
      blockchain: BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
    },

    {
      id: 9,
      img: 'images/banner/home1/alzebra.webp',
      sname: 'ALGB',
      name: 'Algebra',
      category: 'bnb',
    },
    {
      id: 10,
      img: 'images/banner/home1/wrapped-bnb.webp',
      sname: 'WBNB',
      name: 'Wrapped BNB',
      category: 'bnb',
    },
    {
      id: 11,
      img: 'images/banner/home1/Wrapped.webp',
      sname: 'ETH',
      name: 'Ethereum',
      category: 'bnb',
      address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      blockchain: BLOCKCHAIN_NAME.ETHEREUM,
    },
    {
      id: 12,
      img: 'images/banner/home1/avalanche.svg',
      sname: 'AVAX',
      name: 'AVAX',
      category: 'avalanche',
    },
    {
      id: 13,
      img: 'images/banner/home1/avalanche.svg',
      sname: 'WAVAX',
      name: 'WAVAX',
      category: 'avalanche',
    },
    {
      id: 14,
      img: 'images/banner/home1/Wrapped.webp',
      sname: 'WETH.e',
      name: 'Wrapped ETH',
      category: 'avalanche',
    },
    {
      id: 15,
      img: 'images/banner/home1/tether.webp',
      sname: 'USDT.e',
      name: 'Tether Token',
      category: 'avalanche',
    },
    {
      id: 16,
      img: 'images/banner/home1/alzebra.webp',
      sname: 'ALGB',
      name: 'Alzebra',
      category: 'polygon',
      address: '0x0169eC1f8f639B32Eec6D923e24C2A2ff45B9DD6',
      blockchain: BLOCKCHAIN_NAME.POLYGON,
    },
    {
      id: 18,
      img: 'images/banner/home1/usd.webp',
      sname: 'USDC.e',
      name: 'USD Coin(POS)',
      category: 'polygon',
      address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      blockchain: BLOCKCHAIN_NAME.POLYGON,
    },
    {
      id: 19,
      img: 'images/banner/home1/logo.webp',
      sname: 'ARBT',
      name: 'ARBITRUM TOKEN',
      category: 'arbitrum',
      address: '0x0000000000000000000000000000000000000000',
      blockchain: BLOCKCHAIN_NAME.ARBITRUM,
    },
    {
      id: 20,
      img: 'images/banner/home1/Rubic.webp',
      sname: 'RBC',
      name: 'RUBIC TOKEN',
      category: 'arbitrum',
    },
    {
      id: 21,
      img: 'images/banner/home1/alzebra.webp',
      sname: 'ALGB',
      name: 'Alzebra',
      category: 'arbitrum',
    },
    {
      id: 22,
      img: 'images/banner/home1/Wrapped.webp',
      sname: 'WETH',
      name: 'Wrapped Ether',
      category: 'arbitrum',
      address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      blockchain: BLOCKCHAIN_NAME.ARBITRUM,

    },

    {
      id: 23,
      img: 'images/banner/home1/usd.webp',
      sname: 'BNB',
      name: 'Binance coin',
      category: 'bnb',
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      blockchain: BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
    },
  ];

  const calculateExchange = async () => {
    console.log("ddd", selectedToken1, selectedToken2, inputTokenAmount);

    try {
      if (sdk) {

        let fromToken: any = {
          address: selectedToken1.address,
          blockchain: selectedToken1.blockchain,
        }

        let toToken: any = {
          address: selectedToken2.address,
          blockchain: selectedToken2.blockchain,
        }

        if (selectedToken1?.blockchain == selectedToken2?.blockchain) {
          console.log("same");
          const trades = await sdk.onChainManager.calculateTrade(
            fromToken,
            String(inputTokenAmount),
            toToken
          );
          const bestTradeResult = trades[0];
          setOutputTokenAmount(bestTradeResult?.trade?.toTokenAmountMin?.tokenAmount?.toFixed())
          setBestTrade(bestTradeResult?.trade)
          console.log("bestTrade array", bestTradeResult);
          console.log("bestTrade 2", bestTradeResult?.trade?.toTokenAmountMin?.tokenAmount?.toFixed());
        }
        else {
          console.log("different");
          const wrappedTrades = await (sdk.crossChainManager.calculateTrade(fromToken, String(inputTokenAmount), toToken))
          console.log("bestTrade array", wrappedTrades);

          const bestTradeResult: any = wrappedTrades[0];
          setBestTrade(bestTradeResult?.trade)
          setOutputTokenAmount(bestTradeResult?.trade?.toTokenAmountMin.toFixed())
          console.log("bestTrade", bestTradeResult?.trade?.toTokenAmountMin.toFixed());
        }

      }
    }
    catch (error) {
      console.log("Error while calculating amount", error);
    }
  }

  return (
    <section className="banner banner--style1">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <span className="bg-color d-lg-none"></span>
        </div>
      </div>

      <div className="container">
        <div className="banner__wrapper">
          <div
            className="row gy-2 gx-4"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div className="col-lg-6 col-md-7">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="banner__content-coin">
                  <img src="images/banner/home1/3.png" alt="coin icon" />
                </div>
                <h1 className="banner__content-heading">
                  <span>The Future Is WILD! </span>
                </h1>
                {/* <h1 className="banner__content-heading">
                  <span> Us The Best</span>
                </h1> */}
                <h2 className="banner__content-heading">Quality & Safety</h2>

                <p
                  style={{ color: '#cccccc' }}
                  className="banner__content-moto"
                >
                  Welcome to Crowboys Finance the frontier of decentralized
                  crypto exchange where innovation meets the Wild West of
                  digital assets. Saddle up for a seamless trading experience
                  with our NFT Staking, Token Swapping, and Cross-Chain
                  Technology that is as swift as a mustang, secure as a bank
                  vault, and innovative as the pioneers of the blockchain
                  prairie.
                </p>
                {/* <div className="banner__btn-group btn-group">
                  <Link
                    href="signin"
                    className="trk-btn trk-btn--primary trk-btn--arrow"
                  >
                    Start Now
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>{' '}
                  </Link>
                </div> */}
              </div>

              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div
                className="trade-right-section"
              // data-aos="fade-right"
              // data-aos-duration="1000"
              >
                {toggle === 0 ? (
                  <div className="stacking-approve">
                    <div className="stacking-approve-heading">
                      <div>
                        <p style={{ color: 'white', marginRight: '4px' }}>
                          Swap
                        </p>
                        <p>Gas</p>{' '}
                      </div>
                      <div
                        style={{ position: "relative", top: '0', left: '0' }}
                      >
                        <button>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.94764 5.72727C3.18341 3.06894 5.87732 1.22727 9.00001 1.22727C12.638 1.22727 15.6937 3.7272 16.5399 7.10373C16.6223 7.43246 16.9556 7.63216 17.2843 7.54977C17.6131 7.46738 17.8128 7.1341 17.7304 6.80536C16.7505 2.89587 13.2142 0 9.00001 0C5.68437 0 2.78859 1.79278 1.22727 4.46039V3.06818C1.22727 2.72928 0.952538 2.45455 0.613636 2.45455C0.274734 2.45455 0 2.72928 0 3.06818V6.13636C0 6.58823 0.366313 6.95455 0.818182 6.95455H3.88636C4.22527 6.95455 4.5 6.67981 4.5 6.34091C4.5 6.00201 4.22527 5.72727 3.88636 5.72727H1.94764Z"
                              fill="#fff"
                            ></path>
                            <path
                              d="M1.46009 10.8963C1.3777 10.5675 1.04442 10.3678 0.715684 10.4502C0.38695 10.5326 0.187251 10.8659 0.269644 11.1946C1.2495 15.1041 4.78581 18 9.00001 18C12.3156 18 15.2114 16.2072 16.7727 13.5397V14.9318C16.7727 15.2707 17.0475 15.5455 17.3864 15.5455C17.7253 15.5455 18 15.2707 18 14.9318V11.8636C18 11.4118 17.6337 11.0455 17.1818 11.0455H14.1136C13.7747 11.0455 13.5 11.3202 13.5 11.6591C13.5 11.998 13.7747 12.2727 14.1136 12.2727H16.0524C14.8166 14.9311 12.1227 16.7727 9.00001 16.7727C5.36202 16.7727 2.30638 14.2728 1.46009 10.8963Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setOpen(!Open);
                          }}
                        >
                          <svg
                            width="27"
                            height="23"
                            viewBox="0 0 27 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_1626_154)">
                              <path
                                d="M13.5 4.2085H25.1667"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M1.83325 4.2085H7.66661"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M20.7917 18.7915H25.1667"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M1.83325 18.7915H13.4999"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M10.5833 7.12483C12.1942 7.12483 13.5 5.81903 13.5 4.20813C13.5 2.59734 12.1942 1.2915 10.5833 1.2915C8.97255 1.2915 7.66675 2.59734 7.66675 4.20813C7.66675 5.81903 8.97255 7.12483 10.5833 7.12483Z"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                              <path
                                d="M17.875 21.7083C19.4858 21.7083 20.7917 20.4025 20.7917 18.7917C20.7917 17.1808 19.4858 15.875 17.875 15.875C16.2642 15.875 14.9583 17.1808 14.9583 18.7917C14.9583 20.4025 16.2642 21.7083 17.875 21.7083Z"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linecap="round"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_1626_154">
                                <rect width="27" height="23" fill="#fff"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </button>
                        {Open && (
                          <div ref={toggleRef} className="toggle-box">
                            <div>
                              <p style={{ padding: '10px', fontSize: '12px' }}>
                                <svg
                                  width="15"
                                  height="15"
                                  style={{ marginRight: '4px' }}
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                                    fill="#fff"
                                  ></path>
                                </svg>
                                Slippage tolerance
                              </p>
                            </div>

                            <div className="toggle-box-btn-box">
                              <button
                                className="toggle-box-btn-box-button"
                                style={{
                                  background: '#c3976a',
                                  padding: '6px',
                                  borderRadius: '5px',
                                  margin: '3px',
                                }}
                              >
                                Auto
                              </button>
                              <button
                                style={{
                                  background: '#c3976a',
                                  padding: '6px',
                                  borderRadius: '5px',
                                  margin: '3px',
                                }}
                              >
                                1.5%
                              </button>
                              <button
                                style={{
                                  background: '#c3976a',
                                  padding: '6px',
                                  borderRadius: '5px',
                                  margin: '3px',
                                }}
                              >
                                3%
                              </button>
                              <input type="text" value="3%" />
                            </div>
                            <div>
                              <p style={{ padding: '10px', fontSize: '12px' }}>
                                <svg
                                  width="15"
                                  height="15"
                                  style={{ marginRight: '4px' }}
                                  viewBox="0 0 15 15"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M7.5 4.09091C7.78242 4.09091 8.01136 4.31985 8.01136 4.60227V7.67045C8.01136 7.95287 7.78242 8.18182 7.5 8.18182C7.21758 8.18182 6.98864 7.95287 6.98864 7.67045V4.60227C6.98864 4.31985 7.21758 4.09091 7.5 4.09091Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    d="M8.18182 10.2273C8.18182 10.6038 7.87656 10.9091 7.5 10.9091C7.12344 10.9091 6.81818 10.6038 6.81818 10.2273C6.81818 9.85071 7.12344 9.54545 7.5 9.54545C7.87656 9.54545 8.18182 9.85071 8.18182 10.2273Z"
                                    fill="#fff"
                                  ></path>
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM1.02273 7.5C1.02273 3.9227 3.9227 1.02273 7.5 1.02273C11.0773 1.02273 13.9773 3.9227 13.9773 7.5C13.9773 11.0773 11.0773 13.9773 7.5 13.9773C3.9227 13.9773 1.02273 11.0773 1.02273 7.5Z"
                                    fill="#fff"
                                  ></path>
                                </svg>
                                Slippage tolerance
                              </p>
                              <label className="toggle-switch">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={handleToggle}
                                />
                                <span className="toggle-slider"></span>
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="stacking-approve-box">
                      <div className="stacking-approve-box-minibox ">
                        <button
                          className="stacking-approve-box-minibox-btn"
                          onClick={() => changeToggle(1)}
                          style={{ margin: '0px', padding: '10px 3px ' }}
                        >
                          <div className="stacking-approve-box-minibox-btn-images">
                            <img
                              src={CurrencyData[selectedcurrency1]?.img} // Accessing the img property from CurrencyData based on selectedcurrency1
                              alt={CurrencyData[selectedcurrency1]?.name} // Accessing the name property from CurrencyData based on selectedcurrency1
                              style={{
                                border: '5px solid transparent ',
                                borderRadius: '50%',
                                padding: '0px',
                                margin: '0px',
                              }}
                            />
                            <img
                              src={Token1[selectedToken1.index]?.img} // Accessing the img property from TokenData based on the index
                              alt={Token1[selectedToken1.index]?.name} // Accessing the name property from TokenData based on the index
                              style={{
                                border: '5px solid #0b090b ',
                                borderRadius: '50%',
                                padding: '0px',
                                margin: '0px',
                              }}
                            />
                          </div>
                          <div className="stacking-approve-box-minibox-btn-content">
                            <p>{CurrencyData[selectedcurrency1]?.name}</p>
                            <h5>
                              {Token1[selectedToken1.index]?.sname}
                              <img
                                src="images/banner/home1/arrow-down-white.svg"
                                style={{ width: '12px', marginLeft: '4px' }}
                              />
                            </h5>
                          </div>
                        </button>

                        <input
                          type="number"
                          placeholder="Enter an Amount"
                          className="stacking-approve-box-minibox-inputbox"
                          style={{ margin: '0px', padding: '3px' }}
                          onChange={e => setInputTokenAmount(e.target.value)}
                        />
                      </div>

                      <div className="hr">
                        <div className="exchange-icons">
                          <img
                            src="images/banner/home1/chevron.svg"
                            style={{
                              transform: 'rotate(180deg)',
                              margin: '1px',
                              width: '14px',
                            }}
                          />

                          <img
                            src="images/banner/home1/chevron.svg"
                            style={{ margin: '1px', width: '14px' }}
                          />
                        </div>
                      </div>
                      <div className="stacking-approve-box-minibox ">
                        <button
                          className="stacking-approve-box-minibox-btn"
                          onClick={() => changeToggle(2)}
                          style={{ margin: '0px', padding: '3px' }}
                        >
                          <div className="stacking-approve-box-minibox-btn-images">
                            <img
                              src={CurrencyData[selectedcurrency2]?.img} // Accessing the img property from CurrencyData based on selectedcurrency1
                              alt={CurrencyData[selectedcurrency2]?.name} // Accessing the name property from CurrencyData based on selectedcurrency1
                              style={{
                                border: '5px solid transparent ',
                                borderRadius: '50%',
                                padding: '0px',
                                margin: '0px',
                              }}
                            />
                            <img
                              src={Token2[selectedToken2.index]?.img} // Accessing the img property from TokenData based on the index
                              alt={Token2[selectedToken2.index]?.name} // Accessing the name property from TokenData based on the index
                              style={{
                                border: '5px solid #0b090b ',
                                borderRadius: '50%',
                                padding: '0px',
                                margin: '0px',
                              }}
                            />
                          </div>
                          <div className="stacking-approve-box-minibox-btn-content">
                            <p>{CurrencyData[selectedcurrency2]?.name}</p>
                            <h5>
                              {Token2[selectedToken2.index]?.sname}
                              <img
                                src="images/banner/home1/arrow-down-white.svg"
                                style={{ width: '12px', marginLeft: '4px' }}
                              />
                            </h5>
                          </div>
                        </button>

                        <input
                          type="number"
                          placeholder='0.00'
                          value={outputTokenAmount}
                          className="stacking-approve-box-minibox-inputbox"
                          style={{ margin: '0px', padding: '3px' }}
                          disabled={true}
                        />
                      </div>
                      {isChecked && (
                        <div>
                          <input
                            type="text"
                            style={{ border: 'none' }}
                            placeholder="Wallet address or ENS name in target network"
                          />
                        </div>
                      )}
                    </div>
                    <div className="btn-box">
                      {
                        outputTokenAmount ?
                          <SwapBlock onLoadingChange={setLoading} trade={bestTrade} loading={true} address={address} />
                          : <></>
                      }

                      <a className="default-btn" onClick={() => { calculateExchange() }}>calculate</a>
                      <button
                        onClick={() => {
                          setIsChecked(!isChecked);

                        }}
                        style={{
                          background: 'black',
                          borderRadius: '12px',
                          padding: '8px',
                          border: 'none',
                          margin: '0px',
                        }}
                      >
                        <svg
                          width="31"
                          height="25"
                          viewBox="0 0 31 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.25 13.7517V3.86578L16.9855 0.931901C18.8789 0.458541 20.7131 1.91406 20.7131 3.86578H21.5789C23.2358 3.86578 24.5789 5.20892 24.5789 6.86578V13.7517C24.5789 15.4086 23.2357 16.7517 21.5789 16.7517H8.25C6.59314 16.7517 5.25 15.4086 5.25 13.7517Z"></path>
                          <path
                            d="M5.25 3.86578V13.7517C5.25 15.4086 6.59314 16.7517 8.25 16.7517H21.5789C23.2357 16.7517 24.5789 15.4086 24.5789 13.7517V6.86578C24.5789 5.20892 23.2358 3.86578 21.5789 3.86578H5.25ZM5.25 3.86578L16.9855 0.931901C18.8789 0.458541 20.7131 1.91406 20.7131 3.86578V3.86578"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <circle
                            cx="20.7124"
                            cy="10.3086"
                            r="1.28859"
                            fill="#69686e"
                          ></circle>
                          <path
                            d="M1 9V15C1 18.3137 3.68629 21 7 21H29.25"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M1 6.5L1 5"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M1 2.5L1 1"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                          <path
                            d="M27.6529 18.6529L29.2929 20.2929C29.6834 20.6834 29.6834 21.3166 29.2929 21.7071L27.6529 23.3471"
                            stroke="#69686e"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {toggle === 1 ? (
                  <div className="TokenList">
                    <div className="TokenList-header">
                      <button
                        onClick={() => changeToggle(0)}
                        style={{ background: 'transparent', border: 'none ' }}
                      >
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: 'rotate(90deg)' }}
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.50001 6.49976C5.24401 6.49976 4.98801 6.40176 4.79301 6.20676L0.793006 2.20676C0.402006 1.81576 0.402006 1.18376 0.793006 0.792762C1.18401 0.401762 1.81601 0.401762 2.20701 0.792762L5.51201 4.09776L8.80501 0.917762C9.20401 0.534762 9.83501 0.545762 10.219 0.942762C10.603 1.33976 10.592 1.97376 10.195 2.35676L6.19501 6.21876C6.00001 6.40676 5.75001 6.49976 5.50001 6.49976Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </button>
                      <p style={{ color: 'white', marginRight: '4px' }}>
                        Token List
                      </p>
                      <p style={{ color: 'white', marginRight: '4px' }}></p>
                    </div>

                    <div className="TokenList-search">
                      <input
                        type="text"
                        style={{ zIndex: '0' }}
                        placeholder="search name or past address"
                        className="stacking-approve-ETH-header-input"
                      />
                      <img
                        src="images/banner/home1/Untitled.png"
                        alt="coin icon"
                        style={{
                          width: '20px',
                          height: '20px',
                          position: 'absolute',
                          top: '22px',
                          right: '15px',
                          zIndex: '1',
                        }}
                      />
                    </div>
                    <div className="TokenList-Container">
                      <div className="TokenList-Container-1">
                        {CurrencyData.map((item, index) => (
                          <div
                            className={`TokenList-Container-1-items ${selectedcurrency1 === index ? 'activeItem' : ''}`}
                            key={index}
                            onClick={() => {
                              FilterCategoryToken1(item.category);
                              setSelectedcurrency1(index);
                            }}
                          >
                            <img
                              src={item.img}
                              alt={item.name}
                              style={{
                                width: '30px',
                                height: '30px',
                              }}
                            />
                            {item.name}
                          </div>
                        ))}
                      </div>
                      <div className="TokenList-Container-2">
                        {Token1.map((item, index) => (
                          <div
                            className="TokenList-Container-2-items"
                            key={index}
                          >
                            <div
                              className="TokenList-Container-2-items-div1  "
                              onClick={() => {
                                setSelectedToken1({ blockchain: item.blockchain, address: item.address, index });
                                changeToggle(0);
                              }}
                            >
                              <img
                                src={item.img}
                                alt="coin icon"
                                style={{
                                  width: '30px',
                                  height: '30px',
                                }}
                              />
                              <div className="TokenList-Container-2-items-div1-content">
                                <p
                                  style={{
                                    color: 'white',
                                    fontSize: ' 10px',
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  {item.sname}
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    style={{ marginLeft: '4px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_21_17)">
                                      <path
                                        d="M12 23C12 23 21 18.6 21 12V4.3L12 1L3 4.3V12C3 18.6 12 23 12 23Z"
                                        fill="#00E28E"
                                        fill-opacity="0.3"
                                        stroke="#00E28E"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M11.5223 6.54585C11.6675 6.07601 12.3325 6.07601 12.4777 6.54585L13.3075 9.23116C13.3723 9.44066 13.5659 9.58354 13.7852 9.58354H16.5218C17.0001 9.58354 17.2054 10.1905 16.8254 10.4809L14.5689 12.2046C14.4024 12.3318 14.3329 12.5494 14.3948 12.7496L15.2463 15.5054C15.3901 15.9705 14.8519 16.3458 14.4651 16.0503L12.3035 14.399C12.1243 14.2621 11.8757 14.2621 11.6965 14.399L9.53489 16.0503C9.14804 16.3458 8.60992 15.9705 8.75365 15.5054L9.60523 12.7496C9.66709 12.5494 9.59756 12.3318 9.43105 12.2046L7.17461 10.4809C6.79456 10.1905 6.99988 9.58354 7.47814 9.58354H10.2148C10.434 9.58354 10.6277 9.44066 10.6925 9.23116L11.5223 6.54585Z"
                                        fill="#00E28E"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_21_17">
                                        <rect
                                          width="24"
                                          height="24"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </p>
                                <h5
                                  style={{ color: 'white', fontSize: '12px' }}
                                >
                                  {item.name}
                                </h5>
                              </div>
                            </div>
                            <div className="TokenList-Container-2-items-div2">
                              :
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {toggle === 2 ? (
                  <div className="TokenList">
                    <div className="TokenList-header">
                      <button
                        onClick={() => changeToggle(0)}
                        style={{ background: 'transparent', border: 'none ' }}
                      >
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ transform: 'rotate(90deg)' }}
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.50001 6.49976C5.24401 6.49976 4.98801 6.40176 4.79301 6.20676L0.793006 2.20676C0.402006 1.81576 0.402006 1.18376 0.793006 0.792762C1.18401 0.401762 1.81601 0.401762 2.20701 0.792762L5.51201 4.09776L8.80501 0.917762C9.20401 0.534762 9.83501 0.545762 10.219 0.942762C10.603 1.33976 10.592 1.97376 10.195 2.35676L6.19501 6.21876C6.00001 6.40676 5.75001 6.49976 5.50001 6.49976Z"
                            fill="#ffffff"
                          ></path>
                        </svg>
                      </button>
                      <p style={{ color: 'white', marginRight: '4px' }}>
                        Token List
                      </p>
                      <p style={{ color: 'white', marginRight: '4px' }}></p>
                    </div>

                    <div className="TokenList-search">
                      <input
                        type="text"
                        style={{ zIndex: '0' }}
                        placeholder="search name or past address"
                        className="stacking-approve-ETH-header-input"
                      />
                      <img
                        src="images/banner/home1/Untitled.png"
                        alt="coin icon"
                        style={{
                          width: '20px',
                          height: '20px',
                          position: 'absolute',
                          top: '22px',
                          right: '15px',
                          zIndex: '1',
                        }}
                      />
                    </div>
                    <div className="TokenList-Container">
                      <div className="TokenList-Container-1">
                        {CurrencyData.map((item, index) => (
                          <div
                            className={`TokenList-Container-1-items ${selectedcurrency2 === index ? 'activeItem' : ''}`}
                            key={index}
                            onClick={() => {
                              FilterCategoryToken2(item.category);
                              setSelectedcurrency2(index);
                            }}
                          >
                            <img src={item.img} alt={item.name} />
                            {item.name}
                          </div>
                        ))}
                      </div>
                      <div className="TokenList-Container-2">
                        {Token2.map((item, index) => (
                          <div
                            className="TokenList-Container-2-items"
                            key={index}
                          >
                            <div
                              className="TokenList-Container-2-items-div1 "
                              onClick={() => {
                                setSelectedToken2({ blockchain: item.blockchain, address: item.address, index });
                                changeToggle(0);
                              }}
                            >
                              <img
                                src={item.img}
                                alt="coin icon"
                                style={{
                                  width: '30px',
                                  height: '30px',
                                }}
                              />
                              <div className="TokenList-Container-2-items-div1-content">
                                <p
                                  style={{
                                    color: 'white',
                                    fontSize: ' 10px',
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  {item.sname}
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    style={{ marginLeft: '4px' }}
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clip-path="url(#clip0_21_17)">
                                      <path
                                        d="M12 23C12 23 21 18.6 21 12V4.3L12 1L3 4.3V12C3 18.6 12 23 12 23Z"
                                        fill="#00E28E"
                                        fill-opacity="0.3"
                                        stroke="#00E28E"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M11.5223 6.54585C11.6675 6.07601 12.3325 6.07601 12.4777 6.54585L13.3075 9.23116C13.3723 9.44066 13.5659 9.58354 13.7852 9.58354H16.5218C17.0001 9.58354 17.2054 10.1905 16.8254 10.4809L14.5689 12.2046C14.4024 12.3318 14.3329 12.5494 14.3948 12.7496L15.2463 15.5054C15.3901 15.9705 14.8519 16.3458 14.4651 16.0503L12.3035 14.399C12.1243 14.2621 11.8757 14.2621 11.6965 14.399L9.53489 16.0503C9.14804 16.3458 8.60992 15.9705 8.75365 15.5054L9.60523 12.7496C9.66709 12.5494 9.59756 12.3318 9.43105 12.2046L7.17461 10.4809C6.79456 10.1905 6.99988 9.58354 7.47814 9.58354H10.2148C10.434 9.58354 10.6277 9.44066 10.6925 9.23116L11.5223 6.54585Z"
                                        fill="#00E28E"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_21_17">
                                        <rect
                                          width="24"
                                          height="24"
                                          fill="white"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </p>
                                <h5
                                  style={{ color: 'white', fontSize: '12px' }}
                                >
                                  {item.name}
                                </h5>
                              </div>
                            </div>
                            <div className="TokenList-Container-2-items-div2">
                              :
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>

              <div className="col-lg-6">
                <div
                  className="banner__thumb"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
