import { useState } from 'react';
import './search.css';
import NavNews  from '../NavSite/NavNews';
import data from '../Data/dataSearch.json';
import SearchInput from './SearchInput'

// Компонент поиска информации со всеми элементами



const SearchComponent = () => {
    
    return(
        <div className="search-component">
        <NavNews titles={data}/>
       <div className="search-form">
        <span>Яндекс</span>
       <SearchInput/>
       </div>
       <div className="search-clue">Найдется все</div>
       <div className="search-img"></div>
        </div>
    )
}

export default SearchComponent