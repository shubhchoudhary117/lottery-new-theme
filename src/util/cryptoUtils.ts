import CryptoJS from "crypto-js";

const secretPass = process.env.SECRET_KEY || "";


export const decryptData = (Data:any) => {
    const bytes = CryptoJS.AES.decrypt(Data, secretPass);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
};


export const encryptData = (Data:any) => {
    const ennctypedData = CryptoJS.AES.encrypt(JSON.stringify(Data), secretPass).toString();
    return ennctypedData;
};
