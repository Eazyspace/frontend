const { default: axios } = require("axios");

class FloorAPI {
  getAllFloors = async () => {
    return await axios.get("/floor").then((res) => {
      if (res.statusText === "OK") {
        let floorList = res.data.data;
        return floorList;
      }
    });
  };
}

const floorAPI = new FloorAPI();

// export default getRequestAPI = () => {return new FloorAPI()}
export default floorAPI;
