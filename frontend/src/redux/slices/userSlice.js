import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  userId: null,
  serverMessage: null,
  isAuth: false,
  links: [],
  link: []
}

const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token
      state.userId = action.payload.userId
      state.isAuth = true
    },
    logout(state) {
      state.token = null
      state.userId = null
      state.isAuth = false
    },
    setServerMessage(state, action) {
      state.serverMessage = action.payload
    },
    clearServerMessage(state) {
      state.serverMessage = null
    },
    setLinks(state, action) {
      state.links = action.payload
    },
    clearLinks(state) {
      state.links = []
    },
    setLink(state, action) {
      state.link = action.payload
    },
    clearLink(state) {
      state.link = []
    },
  }
})

export const { login, logout, setServerMessage, clearServerMessage, setLinks, clearLinks, setLink, clearLink } = user.actions

export default user.reducer