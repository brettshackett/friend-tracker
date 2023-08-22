import './App.css';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './Welcome';
import { myProfileData, friendsData } from './data';

export const App = () => {
  return(
    <>
    <h1>Friend Tracker</h1>
    <div className='content-container'>
      <WelcomeMessage name={myProfileData.name} />
      <ProfileInfo person={myProfileData} />
      <WelcomeMessage name={friendsData[0].name} />
      <ProfileInfo person={friendsData[0]} />
      <WelcomeMessage name={friendsData[1].name} />
      <ProfileInfo person={friendsData[1]} />
      <WelcomeMessage name={friendsData[2].name} />
      <ProfileInfo person={friendsData[2]} />
    </div>
    </>
  )
};
