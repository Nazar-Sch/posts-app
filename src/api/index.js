import axios from 'axios'

const BASE_URL = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

const api = {
  getUsers: () => BASE_URL.get('/users'),
  getPosts: (id) => BASE_URL.get(`/posts?userId=${id}`),
  addNewPost: (userId, id, title, body) => BASE_URL.post(
    `/posts`, 
    {      
      userId,
      id,
      title,
      body,
    }
  ),
  getPostComments: (id) => BASE_URL.get(`/comments?postId=${id}`),
  getPostInfo: (id) => BASE_URL.get(`/posts/${id}`),
  editPost: (userId, id, title, body) => BASE_URL.put(`/posts/${id}`, 
    {
      userId, 
      id, 
      title, 
      body,
    }
  ),
  deletePost: (id) => BASE_URL.delete(`/posts/${id}`)
}

export default api