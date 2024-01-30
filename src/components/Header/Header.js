// Header.js
import React, { useState } from 'react';
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';

const Header = ({ onSearch, setResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const newSearchTerm = event.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm, setResults);
  };

  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="seta-esquerda">
          <img src={smallLeft} alt="Seta para esquerda" />
        </button>
        <button className="seta-direita">
          <img src={smallRight} alt="Seta para direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="Buscar"/>
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
