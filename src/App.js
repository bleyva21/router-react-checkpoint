import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
//import NewsArticles from "./NewsArticles.js";
import './App.css';
import AppContext from './context/AppContext'
import Home from './components/Home.js'
import Nav from './components/Nav.js'
import About from './components/About.js'
import Profiles from './components/Profiles.js'
import {useState} from 'react'

let newsArticles = [
  { 
      title: "Winning at Life!",
      article: "There are many ways to do so...but the best is just try, try, try again!"
  },
  { 
    title: "Not Winning at Life!",
    article: "There are many ways to do so...but the best is just do nothing!"
  } 
  //add more stories here in this array!
]

let secondaryProfiles =[
{
    firstName: "Willie",
    lastName: "Dustice",
    birthday: "01/01/1978 00:00:00",
    profileImage: "https://wallpaperaccess.com/full/313544.jpg"
},
{
  firstName: "Julian",
  lastName: "Heinze",
  birthday: "05/01/1984 00:00:00",
  profileImage: "/url-to-an-image.jpeg"
}
]

function App() {
  

  

  return (
    <Router>
      <AppContext.Provider value = {{newsArticles, secondaryProfiles}}>
        <div className="App">
                {/* Navbar at the top: three buttons (Home, About, Profiles)*/}
                <Nav/>
                <Switch>
                  {/* My Profile Page */}
                  <Route path='/' exact> <Home />  </Route>
                  {/* My Profile Page shows profile with 'News Articles that i care about' */}
                  <Route path='/about' exact> <About /> </Route>
                  <Route path='/profiles' exact> <Profiles /> </Route>

                </Switch>
                  
                  
                
        </div>
    
      </AppContext.Provider>
    </Router>
  );
}

export default App;
