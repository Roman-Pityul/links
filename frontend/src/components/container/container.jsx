import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from './container.module.scss'

const Container = () => {
  return (
    <div className={styles.root}>
      <Outlet />
    </div>
  )
}

export default Container