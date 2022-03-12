import axios from "./key"

export const getUser = (user:string)=>{
   return axios.get('/mobile/user/'+encodeURI(user))
}
export const userLogin = (username:string,password:string)=>{
   return axios.post('/mobile/user',{username,password})
}
export const addUser= (nom:string,tel:string, password:string)=>{
   return axios.post('/mobile/register',{nom,tel,password})
}

export const getEvents =()=>{
   return  axios.get('/mobile/event')
}

export const getEvent = (event:string)=>{
   return axios.get('/mobile/event/'+encodeURI(event))
}
export const getVideos = ()=>{
   return  axios.get('/mobile/videos')
}
export const getNews = ()=>{
   return axios.get('/mobile/news')
}
export const getBillett = (id:number)=>{
   return axios.get('/mobile/eventbillet/'+id)
}

export const getNew = (news:string)=>{
   return axios.get('/mobile/news/'+encodeURI(news))
}

export const getPubs = ()=>{
   return axios.get('/mobile/pubs')   
}

export const getBillets =  (id:number)=>{
  return axios.get('/mobile/billet_user/'+id)
   
}
export const getBillet = (token:string)=>{
   return axios.get('/mobile/infoBillet/'+encodeURI(token))
}

export const fetchSearch = async (search:string)=>{
   return axios.get('/mobile/search/'+encodeURI(search)) 
}

export const mobilePaie = (phone:string,reference:string,amount:string,user:string,tokenTarif:string,nbBillet:string,currency:string="CDF")=>{
   return axios.post('/paie/mobilemoney',{phone,reference,amount,currency,user,tokenTarif,quantite:nbBillet})
}
export const cartePaie = (reference:string,amount:string,user:string,tokenTarif:string,billet:string,currency:string="CDF")=>{
   return axios.post('/paie/card',{reference,amount,currency,user,tokenTarif,quantite:billet})
}

export const paiementCheck = (check:string)=>{
   return axios.get('/paie/verifyPaiement/'+encodeURI(check))
}

export const getBilletInfo = (token:string)=>{
   return axios.get('/mobile/billet_info/'+encodeURI(token))
}
export const scanLogin = (event:string,password:string)=>{
   return axios.post('/mobile/scan',{token_event:event,password})
}
export const scanCode = (event:string,billet:string)=>{
   return axios.get('/mobile/checkbillet/'+encodeURI(billet)+'/'+encodeURI(event))
}