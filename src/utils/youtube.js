import axios from 'axios'

const getVideos = async (listID, key) => {
  const youtubeURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${listID}&key=${key}`
  const testAPI = 'https://ghibliapi.herokuapp.com/films'

    axios.get(testAPI)
        .then(res => {
            console.log(res.data)
        })

    
}

export default getVideos
