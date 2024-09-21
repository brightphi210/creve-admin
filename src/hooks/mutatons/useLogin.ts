
import { loginQuery } from "../../Apis/api/login";
import { useMutation } from "@tanstack/react-query";


export const useLogin = () => {
    return useMutation({
        mutationFn: loginQuery,
        onSuccess: async (response : any) => {
            localStorage.setItem('token', response.data.access)
            console.log('This is the data', response);
        }
    })

}
