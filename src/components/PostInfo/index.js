import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePostInfo } from '../../redux/actions/rootActions'
import EditPost from '../EditPost'
import Popup from '../Popup'

import './styles.css'

const PostInfo = ({ postData, comments }) => {
  const [showComments, setShowComments] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const dispatch = useDispatch()

  const buttonName = showComments ? 'Hide comments' : 'Show comments'

  const renderPopup = () => {
    if (showPopup) {
      return (
          <Popup>
            <EditPost id={postData.id} setShow={setShowPopup} userId={postData.userId} />
          </Popup>
        )
      } else {
        return null
    }
  }

  const handleDelete = (id) => {
    dispatch(deletePostInfo(id))
    setDeleted(true)
  }

  const renderMain = () => (
    <>
      <div className='postWrapper mt-3'>
        <h2 className='h2'>User {postData.userId}</h2>

        <div className='mainPost'>
          <h4 className='display-4 titlePost text-primary'>{postData.title}</h4>
          <p className='titleText h3'>{postData.body}</p>
          <div className='mb-3'>
            <button className='btn btn-success' onClick={() => setShowPopup(prev => !prev)}>Edit</button>
            <button className='btn btn-danger' onClick={() => handleDelete(postData.id)}>Delete</button>
          </div>
        </div>

        <div className='commentsWrapper'>
              <button className='btn btn-success m-3' onClick={() => setShowComments(prev => !prev)}>{buttonName}</button>
              {comments && showComments
                ? comments.map(comment => (
                <div className='commentsContainer'>
                  <h4 className='h4'>{comment.name}</h4>
                  <p>{comment.body}</p>
                </div>
              ))
              :null
            }
            </div>
            {renderPopup()}
        </div>
    </>
  )
  if (deleted) return <p>Deleted</p>

  return postData ? renderMain() : null
}

export default PostInfo