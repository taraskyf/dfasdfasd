import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContent from './components/ProfileContent/ProfileContent';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



 
const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profileContent" render={ () => <ProfileContent posts={props.state.profilePage } profileData={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs"  render={ () => <Dialogs profileData={props.state.profilePage} messages={props.state.messagesPage}/>}/>
                    <Route path="/news" render={ () => <News />}/>
                    <Route path="/music" render={ () => <Music />}/>
                    <Route path="/settings" render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>);
}



export default App;
