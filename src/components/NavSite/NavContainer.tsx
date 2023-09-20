import { useState } from 'react';
import './nav.css';
import NavNews from './NavNews.tsx';
import NewsTitle from './NewsTitle.tsx';
import dataNews from '../Data/dataNews.json';
import NewsList from './NewsList.tsx';
import CardImage from './CurrentEvent.tsx'
import dataInformation from '../Data/dataInformation.json';
import data2 from '../Data/dataNewsTwo.json';


// Контейнер для навигации, где отображаются навигация по сайту, дата - время,
//  текущие новости, картинка-событие дня

const date = new Date();

const NewsContainer = () => {
  console.log(NewsTitle)
    const data = dataNews;
  
    return (
      <div className='header-container'>
        <div className='nav-menu'>
        <NavNews titles={data}>

          <div className="news-date">
          <span>{date.toLocaleString('ru', options)}</span>
        </div>
        
        </NavNews> 

      </div>
        
      <div className="news-container">
      <NewsList url = {data2}/>
      <CardImage information={dataInformation}/>
          </div>
      
      </div>
    )
  }
  
  
  const options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
  }

  interface NewsTitle {
    title: string,
    url: string
  }
  
  export default NewsContainer