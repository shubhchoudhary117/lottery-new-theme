import React, { useEffect, useState } from 'react'
import "./Markets.scss"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'
import { Market_APIs } from '../../APIs/market-apis/Market_APIs'
import { useLocation, useNavigate } from 'react-router-dom'
import { getToken } from '../../services/token.service'
import { decryptData } from '../../util/cryptoUtils'
import { Loader } from 'lucide-react'
import Header from '../../components/AppHeader/Header'
import sattaMarketGameFrame from "./images/sattaMarketGameFrame.png"

const Markets: React.FC = () => {
    const location = useLocation();
    let marketId = location.state?.marketId;
    const [marketsData, setMarketsData] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(false);

    const navigate = useNavigate();

    // handle navigate to place bet
    const handleAkdaClick = (market: any) => {
        navigate("/place-bet", { state: { market: market, akdaTypes: marketsData, akdaName: market?.gameName } })
    }


    // get markets data
    const getMarketData = async () => {
        let token = getToken();
        let payload = { regularMarketId: marketId };
        setLoader(true);
        await Market_APIs.getMarket_Info(payload, token)
            .then((response) => {
                let API_Response = decryptData(response.data.data);
                console.log(API_Response)
                setMarketsData(API_Response?.payload);
                setLoader(false);
                console.log(API_Response)
            })
            .catch((error: any) => {
                console.log(error);
                setLoader(false);
            })
    }

    useEffect(() => {
        getMarketData();
    }, [location.state])


    return <>
        <Header isGame={false} />
        {loader && <Loader />}
        <div className="satta-market-game-section">
            <div className="satta-market-bazar-header">
                <div className="satta-market-bazar-name">SUN-<span>MONDAY</span>-TUE<span>WED</span>-<span>THU</span>FIR-<span>SAT</span></div>
            </div>

            <div className="old-result-container_">
                <span className='old-result-label'>old result</span> <span className="old-result-value_">179-99-88</span>
            </div>

            <div className="satta-market-game-layout">
                <div className="game-layout-container">
                    <div className="satta-market-game-frame">
                        <LazyLoadImage src={sattaMarketGameFrame} className='satta-market-frame-img' />
                    </div>
                    <div className="market-live-marker">
                        <div className="live-marker">LIVE RESULT</div>
                        <div className="live-marker-bazar-name">MORNING MADHURI</div>
                        <div></div>
                    </div>
                    <div className="satta-market-open-close-info">
                        <div className="satta-market-open-close-container">
                            <div className="satta-market-open-close-info">
                                <div className="market-open-close-time-text">Open Time Remaining</div>
                                <div className="market-open-close-time-in-hourse">19h   54m   12s</div>
                            </div>
                            <div className="market-time-divider"></div>
                            <div className="satta-market-open-close-info">
                                <div className="market-open-close-time-text">Close Time Remaining</div>
                                <div className="market-open-close-time-in-hourse">19h   54m   12s</div>
                            </div>
                        </div>
                    </div>
                    <div className="satta-game-akda-buttons-section">
                        <div className="satta-game-akda-buttons-container">
                            {
                                marketsData?.map((market: any) => {
                                    return <>
                                        <div className="game-type-box_" onClick={()=>handleAkdaClick(market)}>
                                            <img src={market.gameImg} className='game-type-image_' />
                                            <div className="game-type-name_">{market?.gameName}</div>
                                        </div>
                                    </>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}

export default Markets