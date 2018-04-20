import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.example.com'
})

// interceptors
// Add a request interceptor
instance.interceptors.request.use(
  function(request) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default instace
