const { default: axios } = require("axios");

const baseURL = "https://eazyspace-website.herokuapp.com";

class AuthClient {
  logIn = async (academicId, password) => {
    console.table({
      academicId: academicId,
      password: password,
    });
    try {
      return await axios
        .post(baseURL + "/user/login", {
          academicId: academicId,
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
    return sessionStorage.getItem("jwtToken") !== null;
  };
  registerNewAccount = async ({
    name,
    phoneNumber,
    academicId,
    email,
    faculty,
    password,
    ...params
  }) => {
    let data = {
      academicId,
      password,
      name,
      email,
      faculty,
      phoneNumber,
    };

    console.group("API POST: Create an account");
    console.table(data);
    console.groupEnd();

    try {
      let response = await axios.post(baseURL + "/user/sign-up", data);

      if (response.status === 200) return response.data;
    } catch (error) {
      alert(error);
    }
  };
}

const authAPI = new AuthClient();

export default authAPI;
