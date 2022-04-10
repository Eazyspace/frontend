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
}

// export default getRequestAPI = () => {return new BookingRequestAPI()}
export const getRequestClient = () => {
  return new RequestClient();
};
