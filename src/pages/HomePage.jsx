import React from 'react'
import TitleBar from '../components/TitleBar.component'
import NewsCard from '../components/NewsCard.component';
import NewsPage from './NewsPage';

function HomePage() {
  return (
    <>
      <div className='mt-4 max-w-md mx-auto bg-white   md:max-w-5xl h-screen'>
        <TitleBar titleContent={"For the best experience use Inshorts App "} />

        <NewsPage/>
      </div>
    </>
  );
}

export default HomePage
