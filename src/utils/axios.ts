import axios from 'axios'
const api = axios.create({
  baseURL: 'https://userapinode.herokuapp.com/'
})
export default api
