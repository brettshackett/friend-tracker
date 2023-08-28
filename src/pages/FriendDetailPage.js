import { useParams, Link } from 'react-router-dom';
import { friendsData } from "../data";
import { ProfileInfo } from "../components/ProfileInfo";
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext'

const FriendDetailPage =()=>{

    const { favoriteIds,toggleFavorite } = useContext(FavoritesContext);
    const { friendId } = useParams();
    const selectedFriend = friendsData.find(friend => friend.id === friendId);

    const isFavorite = favoriteIds.includes(friendId);

    return selectedFriend ?(
        <ProfileInfo 
            person={selectedFriend}
            actionName={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            onAction={() => toggleFavorite(friendId)}/>
    ):
    <>
    <p>Oops! Couldnt find that friend</p>
    <Link to='/'>
        <button>Back to home</button>
    </Link>
    </>
};

export { FriendDetailPage };