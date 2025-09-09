import React from 'react'
import "./PlaceBet.scss"
import Header from '../../components/AppHeader/Header'
import { ChevronsDown } from "lucide-react";
import BettingCoinsTabs from '../../components/BettingCoinsTabs/BettingCoinsTabs';
import SinglePatti from '../../components/games-list/SinglePatti/SinglePatti';
import OpenCloseToggle from "../../components/OpenCloseRadio/OpenCloseRadio";
import SingleAkda from '../../components/games-list/SingleAkda/SingleAkda';
import PrimeJodi from '../../components/games-list/PrimeJodi/PrimeJodi';
import HalfRed from '../../components/games-list/HalfRed/HalfRed';
import EvenOddPanna from '../../components/games-list/EvenOddPanna/EvenOddPanna';

const PlaceBet = () => {
    return <>
        <Header isGame={false} />
        <section className="place-bet-page_">
            <main className="place-bet-page-container_">
                <div className="place-bet-page-fixed-header_">
                    <div className="place-bet-fixed-header-row_">
                        <div className="market-name-for-betplace_">Morning Madhuri</div>
                        <div className="custom-akda-selector-section_">
                            <div className="cusotm-akda-selector-label_">Jodi</div>
                            <div className="custom-akda-selector-action_">
                                <ChevronsDown size={24} color='#4069A7' />
                            </div>
                        </div>
                    </div>
                    <div className="place-bet-fixed-header-row_">
                        <div className="akda-actions-group_">
                            <div className="custom-akda-selector-section_">
                                <div className="cusotm-akda-selector-label_">Jodi</div>
                                <div className="custom-akda-selector-action_">
                                    <ChevronsDown size={24} color='#4069A7' />
                                </div>
                            </div>
                        </div>
                        <div className="akda-actions-group_">
                            <div>
                                <OpenCloseToggle />
                            </div>
                        </div>
                    </div>
                    <BettingCoinsTabs />
                    <div className="place-bet-note-box_">
                        <div className="place-bet-note-left_">
                            <div className="place-bet-note-message_">Select Chip And Bet</div>
                        </div>
                        <div className="place-bet-note-right_">
                            <div className="place-bet-min-max_">Note : Bet Amount Should Bet Grater then or equal to</div>
                        </div>
                    </div>
                    <EvenOddPanna />

                </div>
            </main>
        </section>


    </>
}

export default PlaceBet