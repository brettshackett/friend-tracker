import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NavBar } from './components/NavBar';
import styles from  './App.module.css';
import { useState } from 'react';


export const App = () => {
  const existingState = JSON.parse(localStorage.getItem('favoriteIds'));
  const [favoriteIds, setFavoriteIds] = useState(existingState || []);

  const toggleFavorite = personId => {
    let newFavoriteIds = favoriteIds.includes(personId) 
    ? favoriteIds.filter(id => id !== personId) 
    : favoriteIds.concat(personId);

      setFavoriteIds(newFavoriteIds);
      localStorage.setItem('favoriteIds', JSON.stringify(newFavoriteIds));
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className = {styles.contentContainer}>
        <Routes>
          <Route exact path='/' element={<FriendsPage favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
          } />
          <Route path='/friends/:friendId' element = {<FriendDetailPage favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />} />
          <Route path='/user-profile' element = {<UserProfilePage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
 };
