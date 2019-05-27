import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import SearchPanel from './components/SearchPanel.js';
import SearchResult from './components/SearchResult.js';

function App() {
  const [meteorites, setMeteorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [url, setUrl] = useState("https://data.nasa.gov/resource/gh4g-9sfh.json?$select=name,id,nametype,recclass,mass,fall,date_extract_y(year) as year,reclat,reclong&$limit=1000");
  
  const useFetch = url => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setMeteorites(json);
      setLoading(false)
    }
  
    useEffect(() => {
      fetchData();
    }, [url]);
  
    return { loading, meteorites };
  };
  
  const rows = [];

  useFetch(url);

  return (
    <div>
      <Header />
      <SearchPanel setUrl={setUrl} name={name} setName={setName} setMeteorites={setMeteorites}/>
      { loading ? 
        <div>Loading...</div> :
        <SearchResult meteorites={meteorites}/>
      }
    </div>
  );
}

export default App;
