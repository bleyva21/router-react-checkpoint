import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
//import NewsArticles from "./NewsArticles.js";
import './App.css';
import AppContext from './context/AppContext'
import Home from './components/Home.js'
import Nav from './components/Nav.js'
import About from './components/About.js'
import Profiles from './components/Profiles.js'
import IndividualProfile from './components/IndividualProfile.js'



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
  profileImage: "https://i.pinimg.com/originals/74/68/bb/7468bb511f429304fdc5d1938ec0d297.jpg"
},
{
  firstName: "Brian",
  lastName: "Leyva",
  birthday: "05/01/1984 00:00:00",
  profileImage: "https://cdn2.bulbagarden.net/upload/thumb/a/a5/806Blacephalon.png/600px-806Blacephalon.png"
},
{
  firstName: "Richie",
  lastName: "Hayden",
  birthday: "05/01/1984 00:00:00",
  profileImage: "https://cdn2.bulbagarden.net/upload/thumb/2/27/805Stakataka.png/600px-805Stakataka.png"
}

]

function App() {
  
  const [selectedProfile, setSelectedProfile] = useState({firstName: 'Default', lastName: 'LastName', birthday: "", profileImage: 'https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg'})
  const [profileFlag, setProfileFlag] = useState(false)

  return (
    <Router>
      <AppContext.Provider value = {{newsArticles, secondaryProfiles, selectedProfile, setSelectedProfile,profileFlag, setProfileFlag}}>
        <div className="App">
                {/* Navbar at the top: three buttons (Home, About, Profiles)*/}
                <Nav/>
                <Switch>
                  {/* My Profile Page */}
                  <Route path='/' exact> <Home />  </Route>
                  {/* My Profile Page shows profile with 'News Articles that i care about' */}
                  <Route path='/about' exact> <About /> </Route>
                  <Route path='/profiles' exact> <Profiles /> </Route>
                  <Route path='/individualProfile' exact><IndividualProfile/></Route>

                </Switch>
                  
                  
                
        </div>
    
      </AppContext.Provider>
    </Router>
  );
}

export default App;
