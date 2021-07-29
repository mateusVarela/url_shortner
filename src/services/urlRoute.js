import axios from "axios";
const API_URL = "https://usapim.herokuapp.com/short"

const findData = async (url) => {
  const response = await axios.post(`${API_URL}`, url);
  console.log(response, "resposta");
  return response
}

const data = {originalUrl: "https://www.youtube.com/watch?v=pg-oETA3Lnk&list=RD_cHrjX8l1c8&index=5"}

export default {
  getHomeList: async () => {
    return [{items: await findData(data)}]
  }
};