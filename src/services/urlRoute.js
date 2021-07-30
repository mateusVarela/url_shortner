import axios from "axios";
const API_URL = "https://usapim.herokuapp.com/short"

const findData = async (url) => {
  const response = await axios.post(`${API_URL}`, url);
  return response
}

export default {
  getUrlShort: async (data) => {
    return { newUrl: await findData(data) }
  }
};