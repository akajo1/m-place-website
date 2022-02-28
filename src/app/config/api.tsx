import axios from "./key"

export const getEvents =()=>{
   return  axios.get('/events')
}
export const getVideos = ()=>{
   return  axios.get('/videos')
}
export const getNews = ()=>{
   return axios.get('/news')
   
}

export const getPubs = ()=>{
   return axios.get('/pubs')   
}

export const getBillets =  (id:number)=>{
  return axios.get('/billet_user/'+id)
   
}

export const fetchSearch = async (search:string)=>{
   return axios.get('/search/'+encodeURI(search)) 
}

