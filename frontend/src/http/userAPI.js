import { $host } from "./index"

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
        const response = await $host.post("/auth/login", {email,password})
        return response
    } catch (error) {
        return error;
    }
}