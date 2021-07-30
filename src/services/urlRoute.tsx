import axios from 'axios'
const API_URL = 'https://usapim.herokuapp.com/short'

type teste = {
  originalUrl?: string
  newUrl?: string
}

const findData = async (url: teste) => {
  const response = await axios.post(`${API_URL}`, url)
  return response
}

export default {
  getUrlShort: async (data: teste) => {
    return { newUrl: await findData(data) }
  }
}
