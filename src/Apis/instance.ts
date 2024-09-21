
import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://creve.store',
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000, // 30 seconds
})