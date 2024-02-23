// App.js
import React, { useEffect, useState } from 'react';
import Header from '../src/components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  const [results, setResults] = useState([]);
  const [artists, setArtists] = useState([]);

  const url = 'http://localhost:4000/artists'
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  };

  const search = async (searchTerm, setResults) => {
    const tempResults = artists.filter((artist) => {
      return artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    });

    setResults(tempResults);
  };

  useEffect(() => {
    const fetchDataAndSetArtists = async () => {
      const data = await fetchData();
      setArtists(data);
    };

    fetchDataAndSetArtists();
  }, []);

  return (
    <div className='grid grid-areas-layout grid-cols-layout grid-rows-layout min-h-screen gap-3 p-4'>
      <Sidebar />
      <Header onSearch={search} setResults={setResults}  />
      <Main results={results} />
      <Footer />
    </div>
  );
}

export default App;
