import React from 'react'
import HeaderBar from '../components/molecules/HeaderBar';
import ArticlesList from '../components/organisms/ArticlesList';
import BottomTab from '../components/organisms/BottomTab';

type Props = {}

const News = (props: Props) => {
  return (
    <div className=''>
      <HeaderBar/>
      <ArticlesList />
      <BottomTab active='news'/>
    </div>
  )
}
export default News;