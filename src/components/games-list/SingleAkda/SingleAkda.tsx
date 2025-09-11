import React, { useEffect, useState } from 'react'
import { IndianRupee } from 'lucide-react'
import OpenCloseSelector from '../../OpenCloseSelector/OpenCloseSelector'
import AkdaTable from '../../Tables/AkdaTable/AkdaTable'
import LastResults from '../../LastResults/LastResults'
import type { coinType } from '../../BettingCoinsTabs/coin.type'
import { useDispatch, useSelector } from 'react-redux'
import type { akdaTableType } from '../../Tables/AkdaTable/akda-table.type'
import type { RootState } from '../../../app/store'
import { notifyError, notifySuccess } from '../../../Redux/ToastifySlice/ToastifyReducer'

const SingleAkda = ({ lotteryNumbers }: any) => {
    const [totalBet, setTotalBet] = useState(0);
    const toastifyDispatcher = useDispatch();
    const [tableData, setTableData] = useState<akdaTableType[]>([]);
    const [undoHistory, setUndoHistory] = useState<akdaTableType[][]>([]);
    const [betNotSelected, setBetNotSelected] = useState(false);
    const { betIsOpen, betIsClose, betIsSelected } = useSelector((state: RootState) => state.BetReducer);
    const selectedCoin = useSelector(
        (state: RootState) => state.selectedCoin.selectedCoin
    );

    useEffect(() => {
        if (lotteryNumbers && lotteryNumbers.length > 0) {
            const updatedTableData: akdaTableType[] = lotteryNumbers.map((item: any) => ({
                colNumber: item,
                ColCoinSVG: null,
                coinVal: 0,
            }));
            setTableData(updatedTableData);
        }
    }, [lotteryNumbers]);



    // On user select the coin and insert coin in table
    const onCoinInsertionHandler = (data: akdaTableType, index: number) => {
        setUndoHistory(prev => [tableData, ...prev]);
        console.log(data)
        const updatedTableData = tableData.map((item, idx) =>
            idx === index
                ? {
                    ...item,
                    coinVal: item.coinVal + (selectedCoin?.inRupee ?? 0), 
                    ColCoinSVG: selectedCoin?.SVG || null,
                }
                : item
        );
        console.log(updatedTableData)
        setTableData(updatedTableData);
    };




    // Define undo functionality
    const handleUndoLastBetChange = () => {
        if (undoHistory.length > 0) {
            const lastState = undoHistory[0];
            setTableData(lastState);
            setUndoHistory(prev => prev.slice(1));
        }
    };

    // Define reset inserted table bets
    const handleResetTable = () => {
        setTableData([]);
        setUndoHistory([]);
    };

    // Calculate the total bet amount
    useEffect(() => {
        const totalCoinVal = tableData.reduce((sum, item) => sum + item.coinVal, 0);
        setTotalBet(totalCoinVal);
    }, [tableData]);

    useEffect(() => {
    }, [tableData])


    // on user place the bet then i will check bet is open or close and bet coin is selected
    const onBetPlace = () => {
        if ((betIsOpen || betIsClose) && betIsSelected) {
            toastifyDispatcher(notifySuccess("Bet placed successfully"))
        } else {
            toastifyDispatcher(notifyError("Please select the bet"))
        }
    }



    return <>

        <div className="game-view_">
            <div className="game-view-container_">
                <div className="game-view-left-section_">
                    <div className="game-view-table_">
                        <AkdaTable showSelectAllButton={false} data={tableData} onCoinInsertionHandler={onCoinInsertionHandler} />
                    </div>
                </div>
                <div className="game-view-right-section_">
                    <div className="betslip-box_">
                        <div className="betslip-title_">Total Bet</div>
                        <div className="betslip-input-group_">
                            <IndianRupee size={22} className='betslip-rupee-icon' />
                            <div className="betlips-input-amount_">5</div>
                        </div>
                        <div className="betslip-actions_">
                            <button className="betslip-button_">BET</button>
                        </div>
                    </div>
                    <LastResults />
                </div>
            </div>
        </div>


    </>
}

export default SingleAkda