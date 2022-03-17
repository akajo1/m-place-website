export const baseUrl = 'https://api.m-place.events/'
export const baseImage = 'https://uploads.m-place.events/fileup/'
export type imageType={
    id:number,
    image: string
}
export type billetTType={
    id:number,
    nbr:number,
    prix:number,
    tarifs:string,
    token?:string
}
export type eventType={
    id: number,
    titre:string,
    date: string,
    heure: string,
    lieu: string,
    description:string,
    organisateur: string,
    prix: number,
    cover:string,
    portrait:string
    billet: number,
    billets?:billetTType[],
    token_event:string,
    token_client:string
}

export type articleType={
    id:number,
    titre:string,
    date_ajout:string,
    token:string,
    image:string,
    description:string
}

export type userType={
    id:number,
    nom: string,
    tel: string,
    email: string,
    adresse:string,
    role: string
} 

export type qrcodeCLientType={
    id:number,
    token: string
}
export type qrcodeOrgType={
    id:number,
    client: userType,
    event: eventType,
    billet: string
}
export type pubType={
    id:number,
    titre:string,
    image:string,
    lien:string
}
export type iconType={
    name: string,
    family:string,
    size:number,
    style?:Object
}
export type textType={
    text:string,
    style:Object
}

export type billetType={
    id:number,
    token:string,
    organisateur:string,
    evenement:string,
    date:string,
    heure:string,
    prix:number
}

export type videoType = {
    id:number,
  titre:string,
  image_cover:string,
  lien_video:string
}