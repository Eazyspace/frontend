import { serialize } from "../utils/utils";
import axios from "axios";

class RoomClient {
  getListRoom({}) {
    return axios.get(`/room`);
  }
}
export const getRoomClient = () => {
  return new RoomClient();
};
