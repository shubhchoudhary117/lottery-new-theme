import React, { useEffect, useState } from 'react';
import "./Authentication.scss"


import { AccessibilityIcon } from 'lucide-react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { notifyError } from '../../Redux/ToastifySlice/ToastifyReducer';
import { Auth_APIs } from '../../APIs/AuthAPIS';
import { decryptData } from '../../util/cryptoUtils';
import Loader from '../../components/Loader/Loader';

const Authentication = () => {
    const [loader, setLoader] = useState<boolean>(false);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const token = queryParams.get('token');
    const userId = queryParams.get('userId');

    const navigate = useNavigate();
    const [state, setState] = useState({ Authorization: Boolean, ErrorMessage: String });
    const dispatcher = useDispatch();


    const TokenBasedAuthenticationOfUser = async () => {
        console.log(token, userId);
        try {
            setLoader(true);
            if (!token) {
                dispatcher(notifyError("Token is missing in the URL parameters."));
                return;
            }

            let payload = {
                clientToken: token,
                userId: userId
            };

            await Auth_APIs.Validate_Token(payload)
                .then((response: any) => {
                    console.log(response)
                    const API_RESPONSE = decryptData(response.data.data);
                    console.log(API_RESPONSE);
                    localStorage.setItem('auth_token', token);
                    localStorage.setItem('user', API_RESPONSE);
                    navigate("/bazars", { replace: true });
                })
                .catch((error) => {
                    setLoader(false);
                });

        } catch (error) {
            setLoader(false);
            console.error("Unexpected error:", error);
        }
    };

    useEffect(() => {
        if (token) {
            TokenBasedAuthenticationOfUser();
        }
    }, [token]);


    return <>
        {loader && <Loader />}
        <section className="validation-page_">
            <div className="validation-page-container_">
                <div className="validation-message-box_">
                    <div className="validation-type_">UnAuthorized Access</div>
                    <div className="validation-message_">Please contact your provider or iframe provider for assistance.</div>
                    <AccessibilityIcon className='access-denied-icon_' />
                </div>
            </div>
        </section>
    </>
}

export default Authentication