import { useDispatch } from 'react-redux'

import { setFetchError } from '../redux/userSlice'

export const useDispatchHook = (message) => {
  const dispatch = useDispatch()

  const dispatchHook = () => {
    return dispatch(setFetchError(message))
  }

  return dispatchHook
}