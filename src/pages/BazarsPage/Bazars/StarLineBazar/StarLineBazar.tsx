import React from 'react'
import "./StarLineBazar.css"
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const StarLineBazar = () => {
    const data:any = [ ]

    return <>

        <div className="bazar-section">

           

                <div className="starline-game-cards">
                    {
                        data.map((bazar:any) => {
                            return <>
                                <Link to={"/kalyan"} state={{bazarName:bazar.bazarName,bazarType:"STARLINE"}}   className='starline-link' >
                                    <div className="starline-card">
                                        <LazyLoadImage src={bazar.img} className='starline-card-img' />
                                    </div>
                                </Link>
                            </>
                        })
                    }


                </div>

           
        </div>

    </>
}

export default StarLineBazar