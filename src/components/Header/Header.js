// Header.js
import React, { useState } from 'react';
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
    <nav className="flex justify-between items-center
      p-4 rounded-lg bg-header-navigation
      w-full
      grid-in-header
    ">
      <div className="flex justify-around items-center">
        <button className="mr-5 flex items-center justify-center
        w-[2rem] h-[32px] bg-seta rounded-md border-none cursor-pointer
        ">
          <img src={smallLeft} alt="Seta para esquerda" />
        </button>
        <button className="mr-5 flex items-center justify-center
        w-[2rem] h-[32px] bg-seta rounded-md border-none cursor-pointer
        ">
          <img src={smallRight} alt="Seta para direita" />
        </button>
      </div>
      <div className="flex items-center w-[364px] h-[48px]
      ml-2 bg-search rounded-[500px] hover:border hover:border-white">
        <img src={search} alt="Buscar" className='w-4 h-4 ml-3'/>
        <input
          className='bg-transparent border-none
          pt-0 pr-[100px] pb-0 pl-3 text-white text-ellipsis
          overflow-hidden whitespace-nowrap outline-none'
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
      <div className="flex items-center">
        <button className="text-login 
          text-base font-bold bg-transparent mr-8 border-none hover:scale-105 hover:text-white transition-all
        ">Inscreva-se</button>
        <button className=" w-[100px] h-[48px]
        text-black text-base font-bold rounded-[40px] border-none bg-white hover:scale-105 transition-all
        hover: 
        ">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
