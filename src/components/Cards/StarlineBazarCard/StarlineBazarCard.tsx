import React from 'react'
import "./StarlineBazarCard.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'


type dataType = {
    data: {
        img: string,
    },
    bazarType:string
}

const StarlineBazarCard: React.FC<dataType> = ({ data,bazarType}) => {

    return <>



        {/* Bazar card ----------------- */}
        <Link to={"/4402882304840840fdsf334r3423"} state={{bazarType:bazarType}} className="Link">
            <div className={`satta-market-card `}>
                <LazyLoadImage
                    className='satta-market-card-img'
                    src={data.img}
                />

                <div className="bazar-open-close-box">
                    <div className="bazar-open-close-wrapper">
                        <div className="bazar-open">
                            <div className="runnig-time">
                                16h 12m 51s
                            </div>
                            <div className="bazar-rate starline">356-18</div>
                        </div>
                        <div className="clock-icon">
                            <Clock className="clock-img"  />
                        </div>

                        <div className="bazar-close">
                            <div className="starline-bazar-time">09:00 AM</div>
                        </div>
                    </div>
                    <div className="starline-bazar-close-timing">Close For Today</div>
                </div>
            </div>
        </Link>
        {/* end of bazare card */}



    </>
}

export default StarlineBazarCard