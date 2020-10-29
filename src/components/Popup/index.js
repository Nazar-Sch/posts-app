import React from 'react'

import './styles.css'

const Popup = ({ children }) => {
  return (
    <div className='popupWrapper'>
      { children }
    </div>
  )
}

export default Popup