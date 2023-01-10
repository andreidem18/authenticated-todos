import axiosOriginal from "axios";

const getAuthorization = () => 'Bearer '+localStorage.getItem('token')

const axios = () => axiosOriginal.create({
    baseURL: import.meta.env.VITE_API_URL+'/api/v1',
    headers: {'Authorization': getAuthorization()}
})

export default axios;