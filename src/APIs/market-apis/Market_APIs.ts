import axios from "axios"
import { API_ENDPOINT } from "../../configuration/API_Configuration"
import { encryptData } from "../../util/cryptoUtils"


export const Market_APIs = {
    getMarket_Info: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/regularMarketGameType/getRegularMarketGameTypeList`,{token:encryptData(payload)}, { headers: { Authorization: `Bearer ${token}` } })
    }
}