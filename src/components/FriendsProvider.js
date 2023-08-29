import { useState } from 'react';
import { FriendsContext } from '../contexts/FriendsContext';
import { friendsData as startFriends } from '../data';

const FriendsProvider = ({ children }) => {
    const existingState = JSON.parse(localStorage.getItem('friends'));

    const [friends, setFriends] = useState(existingState || startFriends);

    const addFriend = friend => {
        const newFriends = friends.concat(friend);
        setFriends(newFriends);
        localStorage.setItem('friends', JSON.stringify(newFriends))
    }

    return(
        <FriendsContext.Provider value={{friends, addFriend }}>
            {children}
        </FriendsContext.Provider>
    ) 
}

export { FriendsProvider };