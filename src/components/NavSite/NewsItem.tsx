import React from 'react'

// отображение строки новости

type NewsItemProps = {
  news: News
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
    
  return (
    <li className='news-item'>
      <img src={news.icon} alt={news.icon} />
      <a href={news.url} className='img'>{news.title} </a>
    </li>
  )
}
interface News {
    id: number
    icon: string
    title: string,
    url: string,  
  }
export default NewsItem