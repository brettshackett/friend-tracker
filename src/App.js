import { useState } from 'react';
import styles from  './App.module.css';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './Welcome';
import { myProfileData, friendsData } from './data';
import { PeopleList } from './PeopleList';

export const App = () => {

  const [favoriteIds, setFavoriteIds] = useState([]);

  const favorites = favoriteIds.map(id => friendsData.find(friend => friend.id === id));
  const nonFavorites = friendsData.filter(friend => !favoriteIds.find(id => friend.id === id))

  const toggleFavorite = personId => {
    if(favoriteIds.includes(personId)){
      setFavoriteIds(favoriteIds.filter(id => id !== personId));
    }else{
      setFavoriteIds(favoriteIds.concat(personId));
    }
  }


  return(
    <>
    <h1>Friend Tracker</h1>
    <div className={styles.contentContainer}>
      <WelcomeMessage name= {myProfileData.name} />
      <h2 className = {styles.contentHeading}>My Profile</h2>
      <ProfileInfo person={myProfileData} />
      <h2 className={styles.contentHeading}>Favorites</h2>
      <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite.' : 'favorites.'}</p>
      <PeopleList people = {favorites} onClickPerson={toggleFavorite} />
      <h2 className={styles.contentHeading}>My Friends</h2>
      <PeopleList people = {nonFavorites} onClickPerson={toggleFavorite} />
    </div>
    </>
  )
};
