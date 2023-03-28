import React from 'react';
import Header from './components/Header'
import Hashtag from './components/Hashtag';
import Label from './objects/Label';
import Input from './objects/Input';
import './App.css'

const App = () => {
  return(
    <main className="app">
      <Header/>
      <Hashtag/>
      <Input/>
      <Label content="Mostrar Eventos"/>

    </main>
  );
}

export default App;
