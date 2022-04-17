import axios from "axios";
class RequestClient {
  sendBookingRequest = async ({
    userId,
    roomId,
    startTime,
    endTime,
    description,
    ...params
  }) => {
    const url = "/room/book";
    return await axios.post(url, {
      userId,
      roomId,
      startTime,
      endTime,
      description,
      ...params,
    });
  };
  async getListRequest({
    userId,
    roomId,
    startTime,
    endTime,
    description,
  }) {
    try {
      let q = JSON.stringify({
        userId,
        roomId,
        startTime,
        endTime,
        description,
      });
      let response = await axios.get(`/request`, { params: { q } });
      if (response.status === 200) {
        return response.data;
      } else return response.message;
    } catch (e) {
      console.log(e);
    }
  }
}

// export default getRequestAPI = () => {return new BookingRequestAPI()}
export const getRequestClient = () => {
  return new RequestClient();
};
