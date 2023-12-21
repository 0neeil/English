import { $host, $authHost } from "./index.js"
import {jwtDecode} from 'jwt-decode';


export const registration = async (email, username, password) => {
    try {
        const response = await $host.post("/auth/registration", {email, username, password})
        return response
    } catch (error) {
        return error
    }
}

export const login = async (email, password) => {
    try {
        const response = await $host.post("/auth/login", {email, password})
        return response
    } catch (error) {
        return error;
    }
}

export const getUser = async () => {
    try {
        let {id} = jwtDecode(localStorage.token, { header: false });
        const response = await $authHost.get(`/profile/user/${id}`, {
            headers:{
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
        return response
    } catch (error) {
        return error
    }
}

export const check = async () => {
    try {
        const response = await $authHost.get('/auth/check', {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        });

        let decodedData = jwtDecode(response.data.token, { header: false });

        return {
            status: response.status,
            role: decodedData.role
        };
    } catch (error) {
        return error
    }
}