import React from 'react'

import './styles.css'

const Loader = () => (
  <div className='loaderWrapper'>
    <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>
    </div>
  </div>
)

export default Loader