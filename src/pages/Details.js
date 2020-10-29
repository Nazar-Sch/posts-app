import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostFullInfo } from '../redux/actions/rootActions'

import { fetchedPostInfo } from '../redux/selectors/rootSelectors'

const Details = ({ match }) => {
  const id = match?.params?.id
  const dispatch = useDispatch()
  const postInfo = useSelector(fetchedPostInfo)

  useEffect(() => {
    dispatch(getPostFullInfo(id))
  }, [id])

const info = () => {
  if (postInfo) {
    return (
      <>
        <h1>User ID: {postInfo.userId}</h1>
        <h4 className=''>Post Title: {postInfo.title}</h4>
        <p>Post Body: {postInfo.body}</p>
      </>
    )
  }
  return null
}

  return (
    <div className='container'>
      <h2 className='h2'>Details</h2>
      {info()}
    </div>
  )
}

export default Details