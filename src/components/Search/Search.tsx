import React, { useState } from 'react';
import searchIcon from '../../assets/images/search.svg';
import './Search.css';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='search-container'>
      <div className="search-bar">
        <h2>Funcionários</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Pesquisar"
            value={query}
            onChange={handleSearch}
            className="search-input"
          />
          <img src={searchIcon} alt="Lupa" className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Search;