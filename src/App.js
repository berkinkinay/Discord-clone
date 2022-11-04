import React from 'react'
import Main from './pages/Main'
import Search from './components/Search'
import FriendsList from './components/FriendsList'
import DirectMessages from './components/DirectMessages'
import SideBar from './components/SideBar'
import FriendsNav from './components/FriendsNav'
import FriendsActivity from './components/FriendsActivity'
import './index.css';

function App() {
  return (

<div>
    <SideBar />
    <FriendsNav />
    <FriendsList /> 
    <FriendsActivity />
    <DirectMessages />
    <Main /> 
    <Search />
</div>
  );
}

export default App;