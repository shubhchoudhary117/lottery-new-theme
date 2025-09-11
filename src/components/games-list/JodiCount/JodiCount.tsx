import React from 'react'
import { IndianRupee } from 'lucide-react'
import OpenCloseSelector from '../../OpenCloseSelector/OpenCloseSelector'
import AkdaTable from '../../Tables/AkdaTable/AkdaTable'
import LastResults from '../../LastResults/LastResults'
import PantaTable from '../../Tables/PanaTable/PantaTable'

const JodiCount = () => {
    return <>

        <div className="game-view_">
            <div className="game-view-container_">
                <div className="game-view-left-section_">
                    <div className="game-view-table_">
                        <PantaTable />
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

export default JodiCount