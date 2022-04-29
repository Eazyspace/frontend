const { default: axios } = require("axios");

class UserClient {
  postUsernameAndPassword = async ({ username, password }) => {
    console.table({
        "academicId": username,
        "password": password,
      });
    try {
      let response = await axios.post("/user/login", {
        "academicId": username,
        "password": password,
      });

      if (response.status === 200) return response;
    } catch (e) {
      console.log(e);
    }
  };
}

const userAPI = new UserClient();

export default userAPI;
