import axios from "axios";
import config from "../config";

export function register(email, password) {
  return axios.post(`${config.apiBase}/register`, {
    email,
    password,
  });
}
