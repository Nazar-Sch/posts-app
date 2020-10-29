import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addPost } from '../../redux/actions/rootActions'

import Popup from '../Popup'
import './styles.css'

const AddNewPost = ({ setStatePopup, postId }) => {
  const  [postTitle, setPostTitle] = useState('')
  const  [postBody, setPostBody] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()

  const handlerSubmit = e => {
    e.preventDefault()
    if (!userId || !postTitle || !postBody) {
      alert('Type data')
      return
    }
    dispatch(addPost(userId, postId, postTitle, postBody))
    setTimeout(() => setStatePopup(false), 500)
  }

  return (
  <Popup>
    <form onSubmit={handlerSubmit}>
      <h5 className='display-3'>Add new post</h5>

      <div class="input-group input-group-lg block">
        <input 
          type="text" 
          name="userId"
          class="form-control mb-2 block" 
          aria-label="Sizing example input" 
          aria-describedby="inputGroup-sizing-lg" 
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          placeholder={'User id'}
        />
      </div>

      <div class="input-group input-group-lg block">
        <input 
          type="text" 
          name="title"
          class="form-control mb-2 block" 
          aria-label="Sizing example input" 
          aria-describedby="inputGroup-sizing-lg" 
          onChange={(e) => setPostTitle(e.target.value)}
          placeholder={'Post Title'}
          value={postTitle}
        />
      </div>

      <div class="input-group input-group-lg block mb-5">
        <input 
          type="text" 
          name='body'
          class="form-control mb-2 block" 
          aria-label="Sizing example input" 
          aria-describedby="inputGroup-sizing-lg" 
          onChange={(e) => setPostBody(e.target.value)}
          placeholder={'Post Text'}
          value={postBody}
        />
      </div>


      <div className='buttonsPopup'>
        <button type='submit' className='btn btn-success mr-2'>Submit</button>
        <button 
          className='btn btn-danger ml-2'
          onClick={() => setStatePopup(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  </Popup>
  )
}

export default AddNewPost