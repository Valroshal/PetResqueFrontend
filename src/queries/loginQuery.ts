import { useQuery} from "@tanstack/react-query";
import axios from 'axios';


const userUrl = 'https://login/user';
const getUser = async (userDetails: any) => {
    const response = await axios.get(userUrl, {
        params: {
            email: userDetails.email,
            password: userDetails.password
        }
    })
    return response.data;
};

export const UseGetUser = (userDetails: any) => {
    const {isLoading, data} = useQuery(['userLogin'], getUser);
    return {data, isLoading};
};