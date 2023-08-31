import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProfileInfo } from "../components/ProfileInfo";
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { FriendsContext } from '../contexts/FriendsContext';


const FriendDetailPage =()=>{

    const navigate = useNavigate();
    const { favoriteIds,toggleFavorite } = useContext(FavoritesContext);
    const { friends } = useContext(FriendsContext);
    const { friendId } = useParams();
    const selectedFriend = friends.find(friend => friend.id === friendId);

    const isFavorite = favoriteIds.includes(friendId);

    const pageActions = [{
        actionName: isFavorite ? 'Remove from Favorites' : 'Add to Favorites',
        handler: () => toggleFavorite(friendId),
    },{
        actionName: 'Edit info',
        handler: () => navigate(`/edit/${friendId}`),
    
    }]

    return selectedFriend ?(
        <ProfileInfo 
            person={selectedFriend}
            actions={pageActions} />
    ):
    <>
    <p>Oops! Couldnt find that friend</p>
    <Link to='/'>
        <button>Back to home</button>
    </Link>
    </>
};

export { FriendDetailPage };