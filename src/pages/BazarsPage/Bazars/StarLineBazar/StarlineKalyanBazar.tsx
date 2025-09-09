import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'
import StarlineBazarCard from '../../../../components/Cards/StarlineBazarCard/StarlineBazarCard';

type dataType = {
  img: string,

}

const StarlineKalyanBazar = () => {
  let location = useLocation();

  const data: dataType[] = []

  let bazarName = location.state?.bazarName;
  let bazarType = location.state?.bazarType;


  return <>


    <div className="bazar-section">
      <div className="starline-bazar-name">{bazarName}</div>
      <div className="bazar-card-swiper-container">
        {
          data.map((item) => {
            return <StarlineBazarCard bazarType={bazarType} data={item} />
          })
        }
      </div>
    </div>

  </>
}

export default StarlineKalyanBazar