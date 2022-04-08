import { serialize } from "../utils/utils";

const { default: axios } = require("axios");

export const getRoomClient = {
  async getListRoom() {
    return axios.get(`/room`);
  },
};
