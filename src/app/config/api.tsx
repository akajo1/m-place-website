import axios from "./key"

export const getUser = (user:string)=>{
   return axios.get('/user/'+encodeURI(user))
}
export const userLogin = (username:string,password:string)=>{
   return axios.post('/user',{username,password})
}
export const addUser= (nom:string,tel:string, password:string)=>{
   return axios.post('/register',{nom,tel,password})
}

export const getEvents =()=>{
   return  axios.get('/event')
}

export const getEvent = (event:string)=>{
   return axios.get('/event/'+encodeURI(event))
}
export const getVideos = ()=>{
   return  axios.get('/videos')
}
export const getNews = ()=>{
   return axios.get('/news')
}

export const getNew = (news:string)=>{
   return axios.get('/news/'+encodeURI(news))
}

export const getPubs = ()=>{
   return axios.get('/pubs')   
}

export const getBillets =  (id:number)=>{
  return axios.get('/billet_user/'+id)
   
}
export const getBillet = (token:string)=>{
   return axios.get('/infoBillet/'+encodeURI(token))
}

export const fetchSearch = async (search:string)=>{
   return axios.get('/search/'+encodeURI(search)) 
}

