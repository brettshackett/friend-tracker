import { WelcomeMessage } from '../components/Welcome';
import { myProfileData, friendsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { useNavigate } from 'react-router-dom';
import styles from './FriendsPage.module.css'

const FriendsPage = ({ favoriteIds, onToggleFavorite =()=> {} }) => {
  const navigate = useNavigate();

  const favorites = favoriteIds.map(id => friendsData.find(friend => friend.id === id));
  const nonFavorites = friendsData.filter(friend => !favoriteIds.find(id => friend.id === id))

  const goToPersonDetail = personId => {
    navigate(`/friends/${personId}`);
  }


  return(
    <>
      <WelcomeMessage name= {myProfileData.name} />
      <h2 className={styles.contentHeading}>Favorites</h2>
      <p>You have {favoriteIds.length} {favoriteIds.length === 1 ? 'favorite.' : 'favorites.'}</p>
      <PeopleList 
        people = {favorites} 
        onClickPerson={goToPersonDetail}
        personActionName = 'Remove from Favorites'
        onPersonAction ={onToggleFavorite} />
      <h2 className={styles.contentHeading}>My Friends</h2>
      <PeopleList 
        people = {nonFavorites} 
        onClickPerson={goToPersonDetail}
        personActionName = 'Add to Favorites'
        onPersonAction={onToggleFavorite} />
    </>
  )
};

export {FriendsPage};