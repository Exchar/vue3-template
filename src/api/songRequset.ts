import  axiosInstance from "@/utils/request";


export const getSongItemById = (ids:string)=>axiosInstance.get('/song/detail',{
    params: ids
})

