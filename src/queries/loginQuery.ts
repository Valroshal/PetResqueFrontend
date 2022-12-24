import { useQuery} from "@tanstack/react-query";
import axios from 'axios';
import {TypeLogin} from "../../types/login";


const userUrl = 'https://catfact.ninja/breeds?limit=1';
const getUser = async (userDetails: TypeLogin | undefined): Promise<boolean> => {
    try{
        console.log("Inside getUser:",userDetails)
        if (userDetails) {
            const response = await axios.get(userUrl, {
                params: {
                    email: userDetails.email,
                    password: userDetails.password
                }
            })
            console.log("getUser here:",response)
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
    //console.log("UseGetUserInfo here:" , data)

    return useQuery(['userLogin'], () => getUser(userDetails));

};