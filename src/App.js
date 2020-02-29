import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContent from './components/ProfileContent/ProfileContent';
import Dialogs from "./components/Dialogs/Dialogs";



const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
           <ProfileContent />
          {/*<Dialogs />*/}
      </div>

    </div>
  );
}




export default App;
