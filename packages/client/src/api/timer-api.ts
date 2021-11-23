import { API } from "../constants/routes";

import axios from "axios";

export function makeTimeApi() {
  return axios.create({
    baseURL: `${API.MAIN}`,
  });
}

export async function getTimer(api = makeTimeApi()) {
  return api.get("", {});
}

export async function updateTimer(localTime: number, api = makeTimeApi()) {
  let reqBody: { localTime: number } = { localTime: localTime };
  return api.patch("", reqBody);
}
