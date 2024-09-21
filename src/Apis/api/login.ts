
import { instance } from "../instance";
import { LOGIN_ENDPOINT } from "../endpoints";

interface LoginPayload {
    email: string;
    password: string;
}
  


export const loginQuery = (payload : LoginPayload) => instance.post(LOGIN_ENDPOINT, payload)