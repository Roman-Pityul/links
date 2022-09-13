export const userHelperActions = {
  LOGIN_ACTION: 'user/loginAction',
  REGISTER_ACTION: 'user/registerAction',
  GENERATE_ACTION: 'user/generateAction',
  GET_LINKS_ACTION: 'user/getLinksAction',
  GET_ONE_LINK_ACTION: 'user/getOneLinkAction',
}

export const loginAction = (data) => {
  return {
    type: userHelperActions.LOGIN_ACTION,
    payload: data
  }
}

export const registerAction = (data) => {
  return {
    type: userHelperActions.REGISTER_ACTION,
    payload: data
  }
}

export const generateAction = (data) => {
  return {
    type: userHelperActions.GENERATE_ACTION,
    payload: data
  }
}

export const getLinksAction = (data) => {
  return {
    type: userHelperActions.GET_LINKS_ACTION,
    payload: data
  }
}

export const getOneLinkAction = (data) => {
  return {
    type: userHelperActions.GET_ONE_LINK_ACTION,
    payload: data
  }
}