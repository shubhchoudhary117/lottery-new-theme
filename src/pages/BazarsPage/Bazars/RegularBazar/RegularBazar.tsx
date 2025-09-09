import React, {
    useState,
    useEffect,
} from "react";

import "./RegularBazar.css"
import { getToken } from "../../../../services/token.service";
import { Regular_Bazar_APIs } from "../../../../APIs/bazar-apis/Regular_Bazar_APIs";
import { decryptData } from "../../../../util/cryptoUtils";
import RegularBazarCard from "../../../../components/Cards/RegularBazarCard/RegularBazarCard";
import Loader from "../../../../components/Loader/Loader";



const RegularBazar = () => {
    const isTabOrMobile = window.matchMedia("(max-width: 600px)").matches;
    const [bazarsData, setBazarsData] = useState<any>([]);
    const [loader, setLoader] = useState<boolean>(false);


    // get regular bazars
    const getRegularBazars = async () => {
        let token = getToken();
        console.log(token)
        let payload = {status:"A"};
        console.log(payload)
        setLoader(true);
        await Regular_Bazar_APIs.get_Regular_Bazars(payload, token)
            .then((response: any) => {
                let API_Response = decryptData(response.data.data);
                setBazarsData(API_Response?.payload);
                setLoader(false);
                console.log(API_Response)
            })
            .catch((error) => {
                console.log(error);
                setLoader(false);
            })
    }


    useEffect(() => {
        getRegularBazars();
    }, [])


    return <>
        {loader && <Loader />}
        <div className="bazar-section">
            <div className="bazar-card-swiper-container">
                {
                    bazarsData?.map((bazar: any) => {
                        return <>
                            <RegularBazarCard data={bazar} />
                        </>
                    })
                }
            </div>
        </div>
    </>
}

export default RegularBazar
