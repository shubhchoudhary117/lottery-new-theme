import React from 'react'
import { useNavigate } from "react-router-dom";
import "./GameTabs.css"
import  RegularBazar  from "./images/gameTabsIcons/regularBazar.svg";
import  KingBazar  from "./images/gameTabsIcons/kingBazar.svg";
import  StartLine  from "./images/gameTabsIcons/starLine.svg";
import  InstantWorli  from "./images/gameTabsIcons/instantWorli.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

type bazarTabEventProp={
    handleBazarClick:(activeBazar:string)=>void,
    activeBazar:string
}

const  GameTabs:React.FC<bazarTabEventProp>=({handleBazarClick,activeBazar})=> {
    const isTabOrMobile = window.matchMedia("(max-width: 600px)").matches;
    const navigate = useNavigate();
    
    const handleGame = () => {
        navigate("/game-tabs-data")
    }

    return (
        <>
            <div className="new-game-tabs">
                <div className="game-name" onClick={()=>handleBazarClick("Regular Bazar")}>
                        <LazyLoadImage src={RegularBazar} className="game-tabs-icon" />
                        <span className={`spn-clr ${activeBazar==="Regular Bazar"?'active':''}`}>Regular Bazar</span>
                </div>
                <div className="game-name" onClick={()=>handleBazarClick("King Bazar")}>
                        <LazyLoadImage src={KingBazar} className="game-tabs-icon" />
                        <span className={`spn-clr ${activeBazar==="King Bazar"?'active':''}`}>King Bazar</span>
                </div>
                {/* <div className="game-name">
        <Link  className='link' to={"/selected-casino"}  state={{ name: "TeenPatti" }}>
         <Teenpatti className="game-tabs-icon"/>
          <span className="spn-clr">TeenPatti</span>
          </Link>
        </div> */}
                <div className="game-name" onClick={()=>handleBazarClick("Starline Bazar")}>
                        <LazyLoadImage src={StartLine} className="game-tabs-icon" />
                        <span className={`spn-clr ${activeBazar==="Starline Bazar"?'active':''}`}>Starline Bazar</span>
                </div>

                <div className="game-name" onClick={()=>handleBazarClick("Instant Worli")}>
                        <LazyLoadImage src={InstantWorli} className="game-tabs-icon" />
                        <span className={`spn-clr ${activeBazar==="Instant Worli"?'active':''}`}>Instant Worli</span>
                </div>
            </div>





        </>
    )
}

export default GameTabs




