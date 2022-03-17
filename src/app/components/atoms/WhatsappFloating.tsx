import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
type Props = {}

export default function WhatsappFloating({}: Props) {
  return (
    <FloatingWhatsApp accountName='M-place' phoneNumber='243850953135' avatar='https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w' chatMessage='Salut!!, qu est-ce qu on peut faire pour vous?' notification notificationSound styles={{zIndex:100,bottom:'15%'}}/>
  )
}