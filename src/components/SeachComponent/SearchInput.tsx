import React from 'react'

// элемент поиска
type SearchInputProps = {
  handlerSearch: (event: React.FormEvent) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ handlerSearch }) => {
  return (
    <form onSubmit={handlerSearch}>
      <input size="60" type="text" />
      <input type="submit" value="Найти" />
    </form>
  )
}

export default SearchInput