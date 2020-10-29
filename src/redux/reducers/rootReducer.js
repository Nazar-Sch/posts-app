import {
  GET_POSTS_SUCCESS, 
  GET_USERS_SUCCESS, 
  NEW_POST_SUCCESS, 
  GET_POST_COMMENTS_SUCCESS, 
  GET_POST_INFO_SUCCESS, 
  EDIT_POST_SUCCESS, 
  DELETE_POST_SUCCESS,
 } from '../actionTypes'

const initialState = {
  users: null,
  posts: null,
  postComments: null,
  postInfo: null,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state, 
        users: action.payload,
      }
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case NEW_POST_SUCCESS: {
      return {
        ...state,
        posts: [...state.posts, action.payload.data],
      }
    }
    case GET_POST_COMMENTS_SUCCESS: {
      return {
        ...state,
        postComments: action.payload,
      }
    }
    case GET_POST_INFO_SUCCESS: {
      return {
        ...state,
        postInfo: action.payload,
      }
    }
    case EDIT_POST_SUCCESS: {
      return {
        ...state,
        postInfo: action.payload.data,
      }
    }
    case DELETE_POST_SUCCESS: {
      return {
        ...state,
        postInfo: [state.postInfo].filter(postId => postId === action.payload),
      }
    }
    default:
      return state;
  }
}

export default rootReducer