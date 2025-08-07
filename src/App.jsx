import React, { useState } from 'react';

import Search from './components/Search'

function App() {
  const [searhTerm, setSearchTerm] = useState('');
  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src="/hero-img.png" alt="hero-banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy without the Hassel</h1>
        </header>
        <Search searhTerm={searhTerm} setSearchTerm={setSearchTerm} />
        <h1 className='text-white'>{searhTerm}</h1>
      </div>
    </main>

  );
}

export default App;
