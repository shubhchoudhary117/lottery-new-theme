import React from 'react';
import "./Header.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MoveLeft , IndianRupee, Search, Wallet } from 'lucide-react';

type headerProps = {
    isGame: boolean
}
const Header: React.FC<headerProps> = ({ isGame }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return <>
        <div className="grid-container">
            <header className={`simple-header ${isGame ? 'game-header' : 'home-header'}`}>
                <nav className={`simple-nav ${isGame ? 'game-nav' : 'home-nav'}`}>
                    <div id={location.pathname === "/" ? "hide" : "show"} className="back-button" onClick={() => navigate(-1)}>
                        <MoveLeft   color={"#fff"} className='back-icon' /></div>

                    {!isGame &&
                        <div className="nav-search-and-balance">
                            <div className="search-group">
                                <span className="search-icon"><Search size={18} className='search-icon' /></span>
                                <input type="text" className='search-input' placeholder='Search' />
                            </div>

                            <div className="user-balance">
                                <div className="wallet-icon"><Wallet color='#fff' className='icon' /></div>
                                <div className="rupee-icon"><IndianRupee color='#fff' className='icon' /></div>
                                <div className="balance-amount">1000</div>
                            </div>
                        </div>
                    }
                </nav>
            </header>
        </div>


    </>
}

export default Header;



