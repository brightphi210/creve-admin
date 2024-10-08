import { CREATIVES_ENDPOINT } from "../endpoints";
import { instance } from "../instance";

export const creativeQuery = () => instance.get(CREATIVES_ENDPOINT)