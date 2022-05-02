const { default: axios } = require("axios");

class AuthClient {
  logIn = async (username, password) => {
    console.table({
      academicId: username,
      password: password,
    });
    try {
      return await axios
        .post("/user/login", {
          academicId: username,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
        })
        .catch((error) => {
          return error;
        });
    } catch (e) {
      console.log(e);
    }
  };
  logOut = async () => {
    sessionStorage.removeItem("jwtToken");
  };
  checkLoggedIn = () => {
    return (sessionStorage.getItem("jwtToken") !== null);
  };
}

const authAPI = new AuthClient();

export default authAPI;
