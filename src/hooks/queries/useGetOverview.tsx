import { useQuery } from "@tanstack/react-query"
import { overviewQuery } from "../../Apis/api/overviewQuery"
import { setAuthToken } from "../../Apis/instance"


export const useGetOverviews = () =>{
    setAuthToken();
    return useQuery({
        queryKey: ['overviews'],
        queryFn: overviewQuery,
        staleTime : Infinity,
        enabled : true,
    })
}