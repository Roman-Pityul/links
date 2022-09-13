import axios from 'axios'

import { SERVER } from '../helpers/constants'

export const userApi = {

  async login(data) {
    const res = await axios.post(`${SERVER}/api/user/login`, data)
    return res
  },

  async register(data) {
    const res = await axios.post(`${SERVER}/api/user/register`, data)
    return res
  },

  async generate(data) {
    const res = await axios.post(`${SERVER}/api/link/register`, data)
    return res
  }
}