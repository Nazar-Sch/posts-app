import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './usersStyles.css'

const UsersList = ({ userName, userId }) => (
  <ul className='usersListWrapper'>
    <li className='container usersWrapper'>
      <h5 className='card-title'>{userName}</h5>
      <Link to={`/posts/${userId}`}>Posts</Link>
    </li>
  </ul>
)

export default UsersList