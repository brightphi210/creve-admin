import { useQuery } from "@tanstack/react-query"
import { creativeQuery } from "../../Apis/api/creativeQuery"
import { setAuthToken } from "../../Apis/instance"


export const useGetCreatives = () => {
    setAuthToken();
    return useQuery({
        queryKey: ['creatives'],
        queryFn: creativeQuery,
        staleTime : Infinity,
        enabled : true,
    })
}