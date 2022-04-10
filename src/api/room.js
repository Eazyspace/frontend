import { serialize } from "../utils/utils";
import axios from "axios";

class RoomClient {
  async getListRoom({
    roomId,
    roomName,
    floorId,
    roomLength,
    roomWidth,
    capacity,
  }) {
    try {
      let q = JSON.stringify({
        roomId,
        roomName,
        floorId,
        roomLength,
        roomWidth,
        capacity,
      });
      let response = await axios.get(`/room`, { params: { q } });
      if (response.status === 200) {
        return response.data;
      } else return response.message;
    } catch (e) {
      console.log(e);
    }
  }
}
export const getRoomClient = () => {
  return new RoomClient();
};
