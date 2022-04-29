const { default: axios } = require("axios");

class FloorAPI {
  getAllFloors = async () => {
    try {
      let response = await axios.get("/floor");

      if (response.status === 200) return response.data;
      else return response.message;
    } catch (e) {
      console.log(e);
    }
  };
}

const floorAPI = new FloorAPI();

// export default getRequestAPI = () => {return new FloorAPI()}
export default floorAPI;
