import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { generateAction } from '../../redux/saga/helperActions'

import './create.scss'

const Create = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.user)

  const [link, setLink] = React.useState('')

  const generateLink = () => {
    dispatch(generateAction({ link, token }))
    navigate('/links')
  }

  const pressHandler = (e) => {
    if (e.key === 'Enter') {
      generateLink()
    }
  }

  const handleClick = () => {
    generateLink()
  }

  return (
    <div className='row'>
      <div className='col s8 offset-2'>
        <div className="input-field col s12">
          <input
            id="link"
            name='link'
            type='text'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="link">Введите ссылку</label>
          <button onClick={handleClick} style={{ marginTop: '10px' }} type='submit' className="waves-effect waves-light btn blue accent-2">создать</button>
        </div>
      </div>
    </div >
  )
}

export default Create