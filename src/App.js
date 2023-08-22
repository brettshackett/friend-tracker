import styles from  './App.module.css';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './Welcome';
import { myProfileData, friendsData } from './data';
import { PersonCard } from './PersonCard';

export const App = () => {
  return(
    <>
    <h1>Friend Tracker</h1>
    <div className={styles.contentContainer}>
      <WelcomeMessage name= {myProfileData.name} />
      <h2 className = {styles.contentHeading}>My Profile</h2>
      <ProfileInfo person={myProfileData} />
      <h2 className = {styles.contentHeading}>My Friends</h2>
      <div className = {styles.peopleList}>
        <div className = {styles.peopleListItem}>
          <PersonCard person = {friendsData[0]} />
        </div>
        <div className = {styles.peopleListItem}>
          <PersonCard person = {friendsData[1]} />
        </div>
        <div className = {styles.peopleListItem}>
          <PersonCard person = {friendsData[2]} />
        </div>
      </div>
    </div>
    </>
  )
};
