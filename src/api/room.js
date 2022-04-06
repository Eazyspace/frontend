import { serialize } from "../utils/utils";

const { default: axios } = require("axios");

const BASE_URI = "https://eazyspace-website.herokuapp.com";


export const getRoomClient ={
    async getListRoom() {
    return axios.get(`${BASE_URI}/room`);
   
   }
}