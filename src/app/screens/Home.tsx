import React from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import BottomTab from '../components/organisms/BottomTab';
import EventList from '../components/organisms/EventList';
import PubOrg from '../components/organisms/PubOrg';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className=''>
      <HeaderBar/>
      <div className="container">
      <PubOrg/>
      <EventList/>
      </div>
      <BottomTab active='/'/>
    </div>
  )
}
export default Home;