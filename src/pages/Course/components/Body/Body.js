import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Body.module.scss'

const Body = () => {
  return (
    <div className={styles.Body}>
      <div className="user-banner">
        <h1>
          Welcom
          <span> Sheela!</span>
        </h1>
        <p>Check Whats up with your Schedule....</p>
      </div>
    </div>
  )
}

export default Body
