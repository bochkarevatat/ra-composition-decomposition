import SearchItem from "./SearchItem";

// список элементов меню

type SearchListProps = {
    url: string
  }
  
  const SearchList: React.FC<SearchListProps> = ({ url }) => {
    // 
  
    return (
      <ul className='search-list'>
        {
          url.map(item => <SearchItem search={item} key={item.id}/>)
        }
      </ul>
    )
  }
  
  
  export default SearchList