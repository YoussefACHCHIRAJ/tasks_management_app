import axios from "axios"
import { useMutation } from "react-query"
import useAuthContext from "./useAuthContext"

const useStoreMember = (endpoint, { onSuccess }) => {
    const { auth } = useAuthContext();

    const query = useMutation(async (memberData) => {
        try {
            const response = await axios.post(endpoint, memberData, {
                headers: {
                    "Authorization": `bearer ${auth.token}`
                }
            });
            console.log(response);
            onSuccess()
            return true;
        } catch (error) {
            console.log({ error: Object.keys(error.response) });
            console.log({
                message: error,
                code: error.code,
            })
            throw error.response.data;
        }
    },
    
    )

    return query;

}

export default useStoreMember