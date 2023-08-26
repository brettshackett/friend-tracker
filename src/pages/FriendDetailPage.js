import { useParams, Link } from 'react-router-dom';
import { friendsData } from "../data";
import { ProfileInfo } from "../components/ProfileInfo";

const FriendDetailPage =({favoriteIds, onToggleFavorite})=>{
    const { friendId } = useParams();
    const selectedFriend = friendsData.find(friend => friend.id === friendId);

    const isFavorite = favoriteIds.includes(friendId);

    return selectedFriend ?(
        <ProfileInfo 
            person={selectedFriend}
            onToggleFavorite={() => onToggleFavorite(friendId)}/>
    ):
    <>
    <p>Oops! Couldnt find that friend</p>
    <Link to='/'>
        <button>Back to home</button>
    </Link>
    </>
};

export { FriendDetailPage };