import axios from "axios";
import AuthHeader from "../utils/auth-header";

const baseURL = "https://eazyspace-website.herokuapp.com";

class RequestClient {
  sendBookingRequest = async ({
    userId,
    roomId,
    startTime,
    endTime,
    description,
    eventName,
    ...params
  }) => {
    console.group("API: sendBookingRequest(), /room/book");
    console.table({
      userId,
      eventName,
      roomId,
      startTime,
      endTime,
      description,
    });
    console.groupEnd();
    try {
      let response = await axios.post(baseURL + "/room/book", {
        userId,
        eventName,
        roomId,
        startTime,
        endTime,
        description,
      });

      return response.data;
    } catch (error) {
      alert(error.message);
    }
  };
  getRequestList = async ({ floorId, status, userId }) => {
    try {
      let q = JSON.stringify({
        floorId,
        status: parseInt(status),
        userId,
      });
      console.group("API call: ");
      console.log(q);
      console.groupEnd();
      let response = await axios.get(`${baseURL}/request`, { params: { q } });

      if (response.status === 200) return response.data;
      // !!! Failcase: On Postman, it responses. Here it returns 404
      else
        return {
          status: "[Hard code] NOT_OK",
          message: "[Hard code] Error code 404",
        };
    } catch (e) {
      console.error(e);
    }
  };

  // !! ADMIN ONLY !!
  approveRequest = async ({ requestId, responseNote }) => {
    return await axios
      .post(
        baseURL + "/admin/accept-request",
        {
          requestId,
          responseNote,
        },
        {
          headers: { Authorization: AuthHeader() },
        }
      )
      .then((res) => {
        if (res.status === 200) return res.data;
      })
      .catch((e) => {
        alert(e);
      });
  };
  declineRequest = async ({ requestId, responseNote }) => {
    return await axios
      .post(
        baseURL + "/admin/decline-request",
        {
          requestId,
          responseNote,
        },
        {
          headers: { Authorization: AuthHeader() },
        }
      )
      .then((res) => {
        if (res.status === 200) return res.data;
      })
      .catch((e) => {
        alert(e);
      });
  };
}

const requestAPI = new RequestClient();

export default requestAPI;
