import axios from 'axios'

import { SERVER } from '../helpers/constants'

export const linkApi = {

  async generate({ link, token }) {
    const res = await axios.post(`${SERVER}/api/link/generate`, { from: link }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  },

  async getLinks(token) {
    const res = await axios.get(`${SERVER}/api/link/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  },

  async getOneLink({ token, id }) {
    const res = await axios.get(`${SERVER}/api/link/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res
  }
}