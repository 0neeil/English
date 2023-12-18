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
        localStorage.setItem('token', response.token)
        return response
    } catch (error) {
        return error;
    }
}

export const check = async () => {
    try {
        const response = await $authHost.get('/auth/check',{ headers: {
            'Authorization': `Bearer ${localStorage.token}`
        }})
        
        let decodedData = jwtDecode(response.data.token, { header: true })
        console.log(decodedData)
        localStorage.setItem('token', response.data.token)
        return {status: response.status,
                role: decodedData.role
        }
    } catch (error) {
        return error.response
    }

}