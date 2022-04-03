import { serialize } from "../utils/utils";

const { default: axios } = require("axios");

const BASE_URI = "http://localhost:6969";


export const getRoomClient ={
    async getListRoom() {
    return axios.get(`${BASE_URI}/room`);
   
   }
}