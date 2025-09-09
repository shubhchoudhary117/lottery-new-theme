import axios from "axios";
import { API_ENDPOINT } from "../configuration/API_Configuration";
import { encryptData } from "../util/cryptoUtils";


export const Auth_APIs = {

    Validate_Token:async (payload:any) => {
      return  await axios.post(`${API_ENDPOINT}/user/homePage/genrateUserToken`,{token:encryptData(payload)})
    }
}

