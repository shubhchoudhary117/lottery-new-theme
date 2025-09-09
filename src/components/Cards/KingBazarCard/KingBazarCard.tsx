import React from 'react'
import "./KingBazarCard.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

type dataType={
    data:{
        img:string,
        bazarName:string
    },
    bazarType:string
    
}

const KingBazarCard:React.FC<dataType> = ({data,bazarType}) => {
    return <>



        {/* Bazar card ----------------- */}
        <Link to={"/788788788485984njdjfj8903842384"} state={{bazarType:bazarType}} className="Link">
            <div className={`king-bazar-card`}>
                <LazyLoadImage
                    className='king-bazar-card-img'
                    src={data.img}
                />
                <div className="bazar-content-container">
                    <div className="bazar-details">
                        <div className="bazar-name"> {data.bazarName}</div>
                        <div className="re-text">99</div>
                        <div className="runnig-mssg">Running For Tomorrow</div>
                    </div>
                    
                </div>
                <div className="bazar-open-close-box">
                    <div className="bazar-open-close-wrapper">
                        <div className="bazar-open king-bazar-timing">
                            <div className="bazar-time king-bazar-time">09:00 AM</div>
                            {/* <div className="bazar-status">OPEN</div> */}
                            <div className="runnig-time king-bazar-running-time">
                                16h 12m 51s
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        {/* end of bazare card */}



    </>
}

export default KingBazarCard