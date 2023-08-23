import { useState } from 'react';
import styles from  './App.module.css';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './Welcome';
import { myProfileData, friendsData } from './data';
import { PersonCard } from './PersonCard';

export const App = () => {

  const [favoriteIds, setFavoriteIds] = useState([]);

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
      <h2 className = {styles.contentHeading}>My Friends</h2>
      <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite.' : 'favorites.'}</p>
      <div className = {styles.peopleList}>
        <div className = {styles.peopleListItem}>
          <PersonCard
            onCardClicked = {toggleFavorite}
            person = {friendsData[0]}
            isFavorite = {favoriteIds.includes(friendsData[0].id)}
        />
        </div>
        <div className = {styles.peopleListItem}>
          <PersonCard 
            onCardClicked = {toggleFavorite}
            person = {friendsData[1]}
            isFavorite = {favoriteIds.includes(friendsData[1].id)}
        />
        </div>
        <div className = {styles.peopleListItem}>
          <PersonCard 
            onCardClicked = {toggleFavorite}
            person = {friendsData[2]} 
            isFavorite = {favoriteIds.includes(friendsData[2].id)}  
        />
        </div>
      </div>
    </div>
    </>
  )
};
