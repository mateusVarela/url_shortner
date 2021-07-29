import axios from "axios";
const API_URL = "https://usapim.herokuapp.com/short"

const findData = async (url) => {
  const response = await axios.post(`${API_URL}`, url);
  console.log(response, "resposta");
  return response
}

export default {
  getHomeList: async (data) => {
    return [{ items: await findData(data) }]
  }
};