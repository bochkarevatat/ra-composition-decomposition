import NewsItem from "./NewsItem";

// компонент список элементов новости в навигации

type NewsListProps = {
    url: string
  }
  
  const NewsList: React.FC<NewsListProps> = ({ url }) => {
    // 
  
    return (
      <ul className='news-list'>
        {
          url.map(item => <NewsItem news={item} key={item.id}/>)
        }
      </ul>
    )
  }
  
  
  export default NewsList