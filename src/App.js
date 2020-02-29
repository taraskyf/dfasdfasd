import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContent from './components/ProfileContent/ProfileContent';



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <ProfileContent />
    </div>
  );
}




export default App;
