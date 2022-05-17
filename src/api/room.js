import axios from "axios";

const baseURL = "https://eazyspace-website.herokuapp.com";

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
      let response = await axios.get(`${baseURL}/room`, { params: { q } });
      if (response.status === 200) {
        return response.data;
      } else return response.message;
    } catch (e) {
      console.log(e);
    }
  }
}

const roomAPI = new RoomClient();
export default roomAPI;
