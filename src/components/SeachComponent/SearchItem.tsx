import React from 'react';
// отображение строки меню перед поиском

type SearchItemProps = {
    search: Menu
}

const SearchItem: React.FC<SearchItemProps> = ({ search }) => {
    
  return (
    <li className='search-item'>
      <a href={search.url}>{search.title}</a>
    </li>
  )
}
interface Menu {
    id: number
    title: string,
    url: string,  
  }
export default SearchItem