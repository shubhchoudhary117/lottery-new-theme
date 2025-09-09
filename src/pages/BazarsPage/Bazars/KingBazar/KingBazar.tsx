import "./KingBazar.css"
import KingBazarCard from "../../../../components/Cards/KingBazarCard/KingBazarCard";

type dataType = {
    img: string,
    bazarName: string
}
const KingBazar = () => {

    const isTabOrMobile = window.matchMedia("(max-width: 600px)").matches;

    const data: dataType[] = []



    return <>

        <div className="bazar-section">
            <div className="bazar-card-swiper-container">
                {/* Top SattaMarket Card ------------------------- */}
                {
                    data.map((bazar) => {
                        return <>

                            <KingBazarCard bazarType="KING BAZAR" data={bazar} />

                        </>
                    })
                }
            </div>
        </div>
    </>
}

export default KingBazar
