import axios from "axios"
import { API_ENDPOINT } from "../../configuration/API_Configuration"
import { encryptData } from "../../util/cryptoUtils"


export const Regular_Bazar_APIs = {
    get_Regular_Bazars: async (payload: any, Token: string) => {
        console.log("Token",Token)
        return await axios.post(`${API_ENDPOINT}/user/regular/getRegularMarketData`, {token:encryptData(payload)}, { headers: { Authorization: `Bearer ${Token}` } })
    }

}