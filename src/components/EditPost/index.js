import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editPostInfo } from '../../redux/actions/rootActions'

import './styles.css'

const EditPost = ({ id, setShow, userId }) => {
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!postTitle || !postBody) {
      alert('Type data')
      return
    }
    dispatch(editPostInfo(userId, id, postTitle, postBody))
    setTimeout(() => setShow(false), 500)
  }
  
  return (
    <form className='editPost' onSubmit={handleSubmit}>
      <h5 className='display-3'>Edit post</h5>

      <div class="input-group input-group-lg block">
        <input 
          type="text" 
          name="userId"
          class="form-control mb-2 block" 
          aria-label="Sizing example input" 
          aria-describedby="inputGroup-sizing-lg" 
          onChange={(e) => setPostTitle(e.target.value)}
          value={postTitle}
          placeholder={'Title'}
        />
      </div>

      <div class="input-group input-group-lg block">
        <input 
          type="text" 
          name="title"
          class="form-control mb-2 block" 
          aria-label="Sizing example input" 
          aria-describedby="inputGroup-sizing-lg" 
          onChange={(e) => setPostBody(e.target.value)}
          placeholder={'Post Text'}
          value={postBody}
        />
      </div>
      <button type='submit' className='btn btn-success mt-3 mb-3'>Edit</button>
      <button className='btn btn-danger mt-3 mb-3' onClick={() => setShow(false)}>Cancel</button>
    </form>
  )
}

export default EditPost