import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { clearServerMessage, clearLinks } from '../../redux/slices/userSlice'
import { getLinksAction } from '../../redux/saga/helperActions'

const Links = () => {

  const { token, links } = useSelector(state => state.user)
  const error = useSelector(state => state.user.serverMessage)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (window.M && error) {
      window.M.toast({ html: error })
    }
    dispatch(clearServerMessage())
  }, [error, dispatch])

  React.useEffect(() => {
    dispatch(getLinksAction(token))

    return () => dispatch(clearLinks())
  }, [dispatch])

  if (links.length > 0) {
    return (
      <>
        <table className="striped">
          <thead>
            <tr>
              <th>№</th>
              <th>Орегинальная</th>
              <th>Сокращенная</th>
            </tr>
          </thead>
          <tbody>
            {
              links.map((link, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{link.from}</td>
                  <td>
                    <Link to={`/detail${link._id}`}>
                      {link.to}
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </>
    )
  }

  return <div><h2>Ссылок пока нет...</h2></div>
}

export default Links