import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchUsers } from '../redux/actions/rootActions';
import { fetchedUsers } from '../redux/selectors/rootSelectors'
import UsersList from '../components/UsersList/UsersList';
import Loader from '../components/Loader';

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(fetchedUsers)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <h2 className='display-4 text-center'>Users</h2>
      {users 
      ? users.map(user => (
          <UsersList 
            userName={user.name} 
            userId={user.id} 
            key={user.id} 
          />
      ))
      : <Loader />
    }
    </>
  )
}

export default Users