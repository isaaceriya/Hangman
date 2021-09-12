import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>This Letter has already been enterred.</p>
    </div>
  )
}

export default Notification
