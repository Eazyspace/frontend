import AuthHeader from "../utils/auth-header";

const { default: axios } = require("axios");

class UserClient {
  getAllUserInfo = async () => {
    try {
      let response = await axios
        .get("/user", { headers: { Authorization: AuthHeader() } })
        .catch((e) => {
          console.error(e);
        });

      if (response.status === 200) return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
}

const userAPI = new UserClient();

export default userAPI;
