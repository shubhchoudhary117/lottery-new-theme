import React from 'react'
import "./AkdaTable.scss"
import { Cross, Redo, Undo } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

type pattiTableProps = {
    showSelectAllButton: boolean;
    data?: { colNumber: number; ColCoinSVG: any | null; coinVal: number }[];
    onCoinInsertionHandler?: (
        data: { colNumber: number; ColCoinSVG: any | null; coinVal: number },
        index: number
    ) => void;
};

const AkdaTable: React.FC<pattiTableProps> = ({ showSelectAllButton, data, onCoinInsertionHandler }) => {
    return <>

        <div className="akda-table_">
            <div className="akda-table-header_"></div>
            <div className="akda-table-body_">
                <div className="akda-table-body-tr_">
                    {
                        data?.map((data, index) => {
                            return <div
                                key={index}
                                onClick={() => {
                                    if (onCoinInsertionHandler) {
                                        onCoinInsertionHandler(data, index);
                                    }
                                }}
                                className="akda-table-td_"
                            > <button className="akda-table-akda_">{data.colNumber}</button>
                                {data.ColCoinSVG && <>
                                    <div className="inserted-coin-wrapper_">
                                        <LazyLoadImage src={data.ColCoinSVG} className='inserted-table-coin' />
                                        <div className='inserted-conin-value_'>{data?.coinVal}</div>
                                    </div>
                                </>
                                }

                            </div>
                        })
                    }
                </div>
            </div>
            <div className="akda-table-footer_">
                <div className="akda-table-footer-actions_">
                    <button className="akda-table-footer-action_"><Undo size={18} color='#fff' />Undo</button>
                    <button className="akda-table-footer-action_"><Redo />Undo</button>
                    <button className="akda-table-footer-action_"><Cross />Reset</button>
                    <button className="akda-table-footer-action_"><Undo />Rebet</button>
                </div>
            </div>
        </div>

    </>
}

export default AkdaTable