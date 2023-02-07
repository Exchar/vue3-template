import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'/api',
    timeout: 100000
})


axiosInstance.interceptors.response.use(res=> {
    if(res.data && res.data.code===200){
        return res.data;
    }else{
        return undefined
    }
},err=> {
    return new Error('接口请求失败',err)
})
export default axiosInstance;