import api from '../../api'
import { 
  GET_POSTS_SUCCESS, 
  GET_POSTS_FAIL,
  GET_USERS_SUCCESS, 
  GET_USERS_FAIL, 
  NEW_POST_SUCCESS, 
  NEW_POST_FAIL,
  GET_POST_COMMENTS_SUCCESS, 
  GET_POST_COMMENTS_FAIL, 
  GET_POST_INFO_SUCCESS, 
  GET_POST_INFO_FAIL, 
  EDIT_POST_SUCCESS, 
  EDIT_POST_FAIL, 
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
} from '../actionTypes'

export const fetchUsers = () => (dispatch) => {
  api.getUsers()
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: GET_USERS_FAIL,
        payload: err,
      })
    })
}

export const fetchPosts = (id) => (dispatch) => {
  api.getPosts(id)
    .then(res => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res.data,
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: GET_POSTS_FAIL,
        payload: err,
      })
    })
}

export const addPost = (userId, id, title, body) => (dispatch) => {
  api.addNewPost(userId, id, title, body)
    .then(res => {
      dispatch({
        type: NEW_POST_SUCCESS,
        payload: res
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: NEW_POST_FAIL,
        payload: err,
      })
    })
}

export const getPostComments = (id) => (dispatch) => {
  api.getPostComments(id)
    .then(res => {
      dispatch({
        type: GET_POST_COMMENTS_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: GET_POST_COMMENTS_FAIL,
        payload: err,
      })
    })
}

export const getPostFullInfo = (id) => (dispatch) => {
  api.getPostInfo(id)
    .then(res => {
      dispatch({
        type: GET_POST_INFO_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: GET_POST_INFO_FAIL,
        payload: err,
      })
    })
}

export const editPostInfo = (userId, id, title, body) => (dispatch) => {
  api.editPost(userId, id, title, body)
    .then(res => {
      dispatch({
        type: EDIT_POST_SUCCESS,
        payload: res
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: EDIT_POST_FAIL,
        payload: err,
      })
    })
}

export const deletePostInfo = (id) => (dispatch) => {
  api.deletePost(id)
    .then(() => {
      dispatch({
        type: DELETE_POST_SUCCESS,
        payload: id
      })
    })
    .catch(err => {
      console.error('Error')
      dispatch({
        type: DELETE_POST_FAIL,
        payload: err,
      })
    })
}