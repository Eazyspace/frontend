const { default: axios } = require("axios");

class BookingRequestAPI {
  sendBookingRequest = async ({
    userId,
    roomId,
    startTime,
    endTime,
    description,
    ...params
  }) => {
    return await axios.post("/room/book", {
      userId,
      roomId,
      startTime,
      endTime,
      description,
    });
  };
  getRequestList = async (floorId, status) => {
    try {
      let q = JSON.stringify({ floorId, status });
      let response = await axios.get("/request", { params: { q } });

      if (response.status === 200) return response.data;
      else return response.message;
    } catch (e) {
      console.error(e);
    }
  };
  approveRequest = async ({ requestId, responseNote }) => {
    return await axios.post("/admin/accept-request", {
      requestId: requestId,
      responseNote: responseNote,
    });
  };
  declineRequest = async ({ requestId, responseNote }) => {
    return await axios.post("/admin/decline-request", {
      requestId: requestId,
      responseNote: responseNote,
    });
  };
}

const bookingRequestAPI = new BookingRequestAPI();

// export default getRequestAPI = () => {return new BookingRequestAPI()}
export default bookingRequestAPI;
