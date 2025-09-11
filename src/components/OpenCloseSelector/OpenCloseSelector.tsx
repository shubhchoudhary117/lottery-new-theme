import React from 'react'
import "./OpenCloseSelector.css"


const OpenCloseSelector = () => {
  // const dispatch = useDispatch();
  // const { betIsOpen, betIsClose } = useSelector((state: RootState) => state.BetReducer); 
  

  // const handleOpenChange = () => {
  //   dispatch(setBetIsOpen(true));
  // }

  // const handleCloseChange = () => {
  //   dispatch(setBetIsClose(true));
  // }

  return (
    <div className="select-open-close-container">
      <div className="open-close-input-groups">
        <div className="open-close-radio">
          <input
            className='open-radio'
            name='open-close'
            value="open"
            type="radio"
            // checked={betIsOpen}
            // onChange={handleOpenChange}
          />
          <div className="open-close-label">Open</div>
        </div>
        <div className="open-close-radio">
          <input
            className='close-radio'
            name='open-close'
            value="close"
            type="radio"
            // checked={betIsClose}
            // onChange={handleCloseChange}
          />
          <div className="open-close-label">Close</div>
        </div>
      </div>
    </div>
  );
}

export default OpenCloseSelector;
