import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPostComments, getPostFullInfo } from '../redux/actions/rootActions'
import { fetchedPostComments, fetchedPostInfo } from '../redux/selectors/rootSelectors'

import PostInfo from '../components/PostInfo'
import Loader from '../components/Loader'

const Post = ({ match }) => {
  const postComments = useSelector(fetchedPostComments)
  const postInfo = useSelector(fetchedPostInfo)
  const dispatch = useDispatch()
  const id = match?.params?.id

  useEffect(() => {
    dispatch(getPostComments(id))
    dispatch(getPostFullInfo(id))
  }, [id])

  return (
    <>
      {postInfo && (postInfo.length !== 0)
        ? <div className='container'>
            {postInfo && postComments 
              ? <PostInfo 
                  postData={postInfo} 
                  comments={postComments}
                /> 
              : <Loader /> 
            }
        </div>
        : null
        }
    </>
  )
}

export default Post