import React from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import VideoList from '../components/organisms/VideoList';

type Props = {}

const Videos = (props: Props) => {
  return (
    <div className=''>
      <HeaderBar/>
      <VideoList/>
      <BottomTab active='videos'/>
    </div>
  )
}
export default Videos;