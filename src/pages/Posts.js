import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { fetchedPosts } from '../redux/selectors/rootSelectors'
import { addPost, fetchPosts } from '../redux/actions/rootActions';

import AddNewPost from '../components/PopupAddNew';
import Loader from '../components/Loader';

const Posts = ({ match }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [postData, setPostData] = useState(null)

  const dispatch = useDispatch()
  const posts = useSelector(fetchedPosts)
  const id = match?.params?.id

  useEffect(() => {
    dispatch(fetchPosts(id))
  }, [id])

  useEffect(() => {
    if (postData) {
      dispatch(addPost(postData))
    }
    
  }, [postData])

  const popup = () => {
    if (showPopup) {
      return (
        <AddNewPost 
          postId={match.params.id}
          statePopup={showPopup}
          setStatePopup={setShowPopup}
          setNewPost={setPostData}
        />
      ) 
    } else {
        return null
      }
  }

  return (
    <>
      <div className='container d-flex justify-content-between align-items-center'>
        <h5 className="display-3">Posts</h5>
        <button 
          className='btn btn-success h-50'
          onClick={() => setShowPopup(prev => !prev)}
        >
          Add new
        </button>
      </div>
      <ul className='container'>
        {posts 
          ? posts.map(post => (
            <>
              <li className='card mb-3 p-2 border-top-0' key={post.id}>
                <h4 className='card-title'>
                  {post.title}
                </h4>
                <p className='p-3'>
                  {post.body}
                </p>
                <div className='d-flex justify-content-around'>
                  <Link to={`/post/${post.id}`}>Post</Link>
                  <Link to={`/details/${post.id}`}>Details</Link>
                </div>
              </li>
            </>
          ))
          : <Loader />
        }
      </ul>
        {popup()}
    </>
  )
}

export default Posts