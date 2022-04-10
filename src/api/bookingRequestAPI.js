import axios from "axios";
class BookingRequestAPI {
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
    });
  };
}

const bookingRequestAPI = new BookingRequestAPI();

// export default getRequestAPI = () => {return new BookingRequestAPI()}
export default bookingRequestAPI;
