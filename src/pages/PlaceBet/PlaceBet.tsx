import React, { useEffect, useMemo, useState } from 'react'
import "./PlaceBet.scss"
import Header from '../../components/AppHeader/Header'
import { CalendarDays, ChevronsDown } from "lucide-react";
import BettingCoinsTabs from '../../components/BettingCoinsTabs/BettingCoinsTabs';
import SinglePatti from '../../components/games-list/SinglePatti/SinglePatti';
import OpenCloseSelector from '../../components/OpenCloseSelector/OpenCloseSelector';
import SPMoter from '../../components/games-list/SPMoter/SPMoter';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getComponent, getTableData, prepareAkdaTypes } from './place-bet.service';
import { setSelectedAkda } from '../../Redux/AkdaReducer/SelectedAkdaReducer';
import { setBetIsClose, setBetIsOpen } from '../../Redux/BetReducer/BetReducer';
import Loader from '../../components/Loader/Loader';
import { Suspense } from 'react';
const PlaceBet = () => {
    const [showJodiGames, setShowJodiGames] = useState<boolean>(false);
    const [showGamesList, setShowGamesList] = useState<boolean>(false);
    const [jodiOtherGameType, setJodiOtherGameType] = useState<string>("");
    const [gameType, setGameType] = useState<string>("");
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [showDateList, setShowDatesList] = useState<boolean>(false);

    const [selectDate, setSelectDate] = useState<string>("");
    const dispatcher = useDispatch();
    const location = useLocation();
    const { bazarType = null, activeDigit = null, akdaOptions = [] } = location.state || {};
    const marketData = location.state?.market;
    const allAkdas = location?.state?.akdaTypes;
    const [lotteryNumbers, setLotteryNumbers] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(false);
    const [akdaTypes, setAkdaTypes] = useState<any>([]);


    const handleSelectGameType = (gameType: string) => {
        setGameType(gameType);
        setShowGamesList(false);
    }

    const handleSelectJodiOtherGameType = (jodiGameType: string) => {
        setJodiOtherGameType(jodiGameType);
        setShowJodiGames(false);
    }

    const handleShowJodiGames = () => {
        setShowJodiGames((prev) => !prev);

    }

    const handleShowGamesList = () => {
        setShowGamesList((prev: any) => {
            if (showDateList) {
                setShowDatesList(false);
            }
            return !prev
        })
    }

    const handleShowDateList = () => {
        setShowDatesList((prev) => {
            if (showGamesList) {
                setShowGamesList(false);
            }
            return !prev;
        });
    }

    const handleSelectDate = (date: string) => {
        setSelectedDate(date);
        setShowDatesList(false);
    }


    useEffect(() => {
        if (allAkdas) {
            setAkdaTypes(prepareAkdaTypes(allAkdas).akdasNames);
            setGameType(location?.state?.akdaName)
        }
    }, [allAkdas, location?.state]);

    useEffect(() => {
        console.log(gameType)
        dispatcher(setBetIsOpen(false));
        dispatcher(setBetIsClose(false));
    }, [gameType]);


    useEffect(() => {
        const fetchTableData = async () => {
            if (allAkdas && gameType) {
                setLoader(true);
                let groupedAkdas = prepareAkdaTypes(allAkdas).allAkdasData;
                let Table_Akdas = await getTableData(groupedAkdas[gameType]);
                dispatcher(setSelectedAkda(groupedAkdas[gameType]));
                console.log(gameType)
                console.log("Resolved Table Data:", Table_Akdas);
                setLoader(false);
                setLotteryNumbers([...Table_Akdas]);
            }
        };
        fetchTableData();
    }, [allAkdas, gameType]);


    useEffect(() => {
        if (bazarType && (bazarType === "STARLINE" || bazarType === "KING BAZAR")) {
            setAkdaTypes(akdaOptions);
            if (activeDigit) setGameType(activeDigit);
        }
    }, [bazarType, akdaOptions]);


    // set rendering component
    const SelectedComponent = getComponent(gameType);

    return <>
        <Header isGame={false} />
        <section className="place-bet-page_">
            <main className="place-bet-page-container_">
                <div className="place-bet-page-fixed-header_">
                    <div className="place-bet-fixed-header-row_">
                        <div className="market-name-for-betplace_">Morning Madhuri</div>
                        <div className="place-bet-action_">
                            <div className="custom-akda-selector-section_">
                                <div className="cusotm-akda-selector-label_">Jodi</div>
                                <div className="custom-akda-selector-action_" onClick={handleShowJodiGames}>
                                    <ChevronsDown size={18} className="select-jodi-icon_" color='#4069A7' />
                                </div>
                                {showJodiGames &&
                                    <div className="custom-select-options-list_">
                                        <div onClick={() => handleSelectJodiOtherGameType("hjk")} className="custom-select-option_">Single Akda</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="place-bet-fixed-header-row_">
                        <div className="akda-actions-group_">
                            <div className="custom-akda-selector-section_">
                                <div className="cusotm-akda-selector-label_">{gameType}</div>
                                <div className="custom-akda-selector-action_">
                                    <ChevronsDown onClick={handleShowGamesList} size={18} className="select-jodi-icon_" color='#4069A7' />
                                </div>
                                {showGamesList &&
                                    <div className="custom-select-options-list_">
                                        {akdaTypes.map((akda: any) => (
                                            <div onClick={() => handleSelectGameType(akda)} className="custom-select-option_">{akda}</div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="akda-actions-group_">
                            <div className="custom-akda-selector-section_">
                                <div className="cusotm-akda-selector-label_">{selectedDate}</div>
                                <div className="custom-akda-selector-action_ no-border">
                                    <CalendarDays onClick={handleShowDateList} size={25} className="select-jodi-icon_" color='#4069A7' />
                                </div>
                                {showDateList &&
                                    <div className="custom-select-options-list_">
                                        <div onClick={() => handleSelectDate("28-09-2025")} className="custom-select-option_">28-09-2025</div>
                                        <div onClick={() => handleSelectDate("29-09-2025")} className="custom-select-option_">29-09-2025</div>
                                        <div onClick={() => handleSelectDate("30-09-2025")} className="custom-select-option_">30-09-2025</div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <OpenCloseSelector />
                    <BettingCoinsTabs />
                    <div className="place-bet-note-box_">
                        <div className="place-bet-note-left_">
                            <div className="place-bet-note-message_">Select Chip And Bet</div>
                        </div>
                        <div className="place-bet-note-right_">
                            <div className="place-bet-min-max_">Note : Bet Amount Should Bet Grater then or equal to</div>
                        </div>
                    </div>
                    <Suspense fallback={<Loader />}>
                        {SelectedComponent ? <SelectedComponent marketData={marketData} lotteryNumbers={lotteryNumbers} /> : null}
                    </Suspense>
                </div>
            </main>
        </section>


    </>
}

export default PlaceBet