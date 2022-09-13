import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getOneLinkAction } from '../../redux/saga/helperActions'
import { clearLink } from '../../redux/slices/userSlice'

const Detail = () => {
  const dispatch = useDispatch()

  const { token, link } = useSelector(state => state.user)
  const { id } = useParams()

  React.useEffect(() => {
    dispatch(getOneLinkAction({ token, id }))

    return () => dispatch(clearLink())
  }, [id])

  return (
    <>
      {
        link ? (
          <>
            <h3>Ссылка</h3>
            <div style={{ marginTop: '50px' }}>
              <span><strong>Орегинальная: </strong></span>
              <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a>
            </div>
            <div>
              <span><strong>Сокращенная: </strong></span>
              <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a>
            </div>
            <div>
              <span><strong>Переходы: </strong></span>
              <span>{link.clicks}</span>
            </div>
            <div>
              <span><strong>Дата создания: </strong></span>
              <span>{new Date(link.date).toLocaleDateString()}</span>
            </div>
          </>
        ) : (<div><h2>Loading....</h2></div>)
      }
    </>
  )
}

export default Detail