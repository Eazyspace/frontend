import axios from "axios";

const baseURL = "https://eazyspace-website.herokuapp.com";

class RequestClient {
  sendBookingRequest = async ({
    userId,
    roomId,
    startTime,
    endTime,
    description,
    ...params
  }) => {
    console.log({
      userId,
      roomId,
      startTime,
      endTime,
      description,
    });
    try {
      let response = await axios.post(baseURL + "/room/book", {
        userId,
        roomId,
        startTime,
        endTime,
        description,
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  getRequestList = async ({ floorId, status, userId }) => {
    try {
      let q = JSON.stringify({ floorId, status, userId });
      let response = await axios.get(baseURL + "/request", { params: { q } });

      if (response.status === 200) return response.data;
      else return response.message;
    } catch (e) {
      console.error(e);
    }
  };
  approveRequest = async ({ requestId, responseNote }) => {
    return await axios.post(baseURL + "/admin/accept-request", {
      requestId: requestId,
      responseNote: responseNote,
    });
  };
  declineRequest = async ({ requestId, responseNote }) => {
    return await axios.post(baseURL + "/admin/decline-request", {
      requestId: requestId,
      responseNote: responseNote,
    });
  };
}

const requestAPI = new RequestClient();

export default requestAPI;
