import axios from 'axios'
const API_URL = 'https://usapim.herokuapp.com/short'

type data = {
  originalUrl?: string
  newUrl?: string
}

const findData = async (url: data) => {
  const response = await axios.post(`${API_URL}`, url)
  return response
}

export default {
  getUrlShort: async (data: data) => {
    return { newUrl: await findData(data) }
  }
}
