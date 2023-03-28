import React from 'react';
import Header from './components/Header'
import Hashtag from './components/Hashtag';
import Label from './objects/Label';
import './App.css'

const App = () => {
  return(
    <main className="app">
      <Header/>
      <Hashtag/>
      <Label content="Mostrar Eventos"/>
    </main>
  );
}

export default App;
