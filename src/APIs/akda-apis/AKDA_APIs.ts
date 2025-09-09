import axios from "axios"
import { API_ENDPOINT } from "../../configuration/API_Configuration"
import { encryptData } from "../../util/cryptoUtils"


export const AKDA_APIs = {
    getAkda_Table_Info: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/listById`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },
    getDigitBasedJodiTable: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/digitBasedJodi`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },
    getGroupJodiTable: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/groupJodi`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },
    getTwoDigitTable: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/towDigitPannel`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },
    getJodiCountTable: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/getJodiCount`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },
    getSpMoterTable: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/getSpMotor`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },
    getPanaFamilyTable: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/getPanaFamily`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },
     getPanaDifferenceTable: async (payload: any, token: string) => {
        return axios.post(`${API_ENDPOINT}/user/list/getPanaDifference`,
            { token: encryptData(payload) }, { headers: { Authorization: `Bearer ${token}` } })
    },

}