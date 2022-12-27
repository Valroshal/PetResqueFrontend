import { useQuery} from "@tanstack/react-query";
import axios from 'axios';
import {TypeLogin} from "../../types/login";

const userUrl = 'https://catfact.ninja/breeds?limit=1';
const getUserInfo = async (userDetails: TypeLogin | undefined): Promise<boolean> => {
    try {
        if (userDetails) {
            const response = await axios.get(userUrl, {
                params: {
                    email: userDetails.email,
                    password: userDetails.password
                }
            })
            return true;
        }
        return false;
    }
    catch(err) {
        throw err;
    }
};

export const UseGetUserInfo = (
    userDetails: TypeLogin | undefined
) => {
    return useQuery(['userLogin'], () => getUserInfo(userDetails));
};