import { useState } from 'react';
import { FriendsContext } from '../contexts/FriendsContext';
import { friendsData as startFriends } from '../data';

const FriendsProvider = ({ children }) => {
    const existingState = JSON.parse(localStorage.getItem('friends'));

    const [friends, setFriends] = useState(existingState || startFriends);

    const addFriend = friend => {
        const newFriends = [...friends, friend];
        setFriends(newFriends);
        localStorage.setItem('friends', JSON.stringify(newFriends))
    }

    const updateFriend = updatedInfo => {
        const updatedFriends = friends.map(friend => {
            if(friend.id === updatedInfo.id){
                return updatedInfo;
            }else{
                return friend;
            }
        });

        setFriends(updatedFriends);
        localStorage.setItem('friends', JSON.stringify(updatedFriends));
    }

    return(
        <FriendsContext.Provider value={{ friends, addFriend, updateFriend }}>
            {children}
        </FriendsContext.Provider>
    ) 
}

export { FriendsProvider };