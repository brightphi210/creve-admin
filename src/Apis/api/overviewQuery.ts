

import { instance } from "../instance";
import { OVERVIEW_ENDPOINT } from "../endpoints";

export const overviewQuery = () => instance.get(OVERVIEW_ENDPOINT)