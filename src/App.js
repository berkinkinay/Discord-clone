import React from 'react'
//PAGES
import Main from './pages/Main'
import All from './pages/All'
import Online from  './pages/Online'
import Pending from './pages/Pending'
import Suggestions from './pages/Suggestions'
import Blocked from './pages/Blocked'
import AddFriend from './pages/AddFriend'
//COMPONENTS
import Search from './components/Search'
import FriendsList from './components/FriendsList'
import DirectMessages from './components/DirectMessages'
import SideBar from './components/SideBar'
import FriendsActivity from './components/FriendsActivity'
import { Route, Routes, useLocation } from 'react-router-dom';
// CSS and NAe
import './index.css';
import Navbar from './Navbar'

function App() {
  const location = useLocation();
  return (

 <>
  <Navbar />
  <SideBar />
  <FriendsList /> 
  <FriendsActivity />
  <DirectMessages />
  <Main /> 
  <Search />
    <Routes key={location.pathname} location={location}>
      <Route 
        exact 
        path= '/' element= { <Online />} />
     <Route
        exact 
        path= '/all' element= { <All/> } />
      <Route
        exact
        path= '/pending' element= { <Pending /> } />
      <Route
        exact
        path= '/suggestions' element={ <Suggestions />} />
       <Route
        exact
        path= '/blocked' element={ <Blocked />} />
      <Route
        exact
        path= '/addfriend' element={ <AddFriend />} />
    </Routes> 
 </>
  );
}
export default App;