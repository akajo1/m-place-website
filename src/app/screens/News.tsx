import React from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';

type Props = {}

const News = (props: Props) => {
  return (
    <div className=''>
      <HeaderBar/>
      <div className="container">
      
      </div>
      <BottomTab active='news'/>
    </div>
  )
}
export default News;