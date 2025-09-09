import React from 'react'
import "./InstantWorli.css"
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const InstantWorli = () => {
    const data:any = []
    return <>

        <div className="bazar-section">
        <div className="bazar-card-swiper-container">
                    {
                        data.map((img:any) => {
                            return <>
                                <Link to={"/23442424324fwer32424/instant-worli"} className='link' >
                                    <div className="instant-worli-card">
                                        <LazyLoadImage src={img} className='instant-worli-card-img' />
                                        <div className="instant-worli-card-title">Instant Worli 1</div>
                                    </div>
                                </Link>
                            </>
                        })
                    }
                </div>
        </div>

    </>
}

export default InstantWorli