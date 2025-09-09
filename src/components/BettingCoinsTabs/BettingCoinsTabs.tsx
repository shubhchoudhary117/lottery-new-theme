import React from 'react'
import "./BettingCoinsTabs.scss"
import  One  from "./icons-images/images/one.svg"
import  Five from "./icons-images/images//five.svg"
import Ten from "./icons-images/images//ten.svg"
import  Fifty from "./icons-images/images//fifty.svg"
import  Hundred  from "./icons-images/images//hundred.svg"
import  FiveHundred from "./icons-images/images//fivehundred.svg"
import  Thousand  from "./icons-images/images//thousand.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import type { coinType } from './coin.type'


//define collection of coins value and svg image
const coinsData:any = [{ SVG: One, inRupee: 1 }, { SVG: Five, inRupee: 5 }, { SVG: Ten, inRupee: 10 },
{ SVG: Fifty, inRupee: 50 }, { SVG: Hundred, inRupee: 100 }, { SVG: FiveHundred, inRupee: 500 },
{ SVG: Thousand, inRupee: 1000 }
]



  type coinTabProps = {
    onCoinClickEvent: (coin: coinType) => void;
  };
  
const BettingCoinsTabs:React.FC<any> = () => {
    return <>
        {/* coin tabs -------------------------------------- */}
        <div className="select-coin-container">
            <div className="select-coin-wrapper">
                <div className='coins'>
                    {
                        coinsData.map((coin:any) => {
                            return <div className="coin"><LazyLoadImage src={coin.SVG} className='coin-img' /></div>
                        })
                    }

                </div>
            </div>

        </div>
        {/* end of select coin tabs container ---------------- */}

    </>
}

export default BettingCoinsTabs