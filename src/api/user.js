import AuthHeader from "../utils/auth-header";

const { default: axios } = require("axios");

const baseURL = "https://eazyspace-website.herokuapp.com";

class UserClient {
  getAllUserInfo = async () => {
    try {
      let response = await axios.get(baseURL + "/user", {
        headers: { Authorization: AuthHeader() },
      });

      if (response.status === 200) return response.data;
    } catch (error) {
      alert(error);
      return error;
    }
  };
  setNewAvatar = async (base64Image) => {
    try {
      let response = await axios.post(
        baseURL + "/user/set-avatar",
        { avatar: base64Image },
        { headers: { Authorization: AuthHeader() } }
      );

      if (response.status === 200) return response.data;
    } catch (error) {
      alert(error);
      return error;
    }
  };
}

const userAPI = new UserClient();

export default userAPI;
