import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { NewFriendPage } from './pages/NewFriendPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NavBar } from './components/NavBar';
import styles from  './App.module.css';
import { FavoritesProvider } from './components/FavoritesProvider';


export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <FavoritesProvider>
        <div className = {styles.contentContainer}>
          <Routes>
            <Route exact path='/' element={<FriendsPage />} />
            <Route path='/friends/:friendId' element = {<FriendDetailPage />} />
            <Route path='/user-profile' element = {<UserProfilePage />}/>
            <Route path='/new-friend' element = {<NewFriendPage />} /> 
          </Routes>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
 };
