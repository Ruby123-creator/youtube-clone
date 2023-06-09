import axios from 'axios'
const key = process.env.REACT_APP_YT_API_KEY
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: key,
   },
})

export default request