import { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './NewFriendPage.module.css';
import { FriendsContext } from '../contexts/FriendsContext';
import { Navigate } from 'react-router-dom';

const NewFriendPage = () => {
    const [profilePicUrl, setProfilePicUrl] = useState('')
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [bio, setBio] = useState('');
    const [dob, setDob] = useState('');
    const [interests, setInterests] = useState('');

    const { addFriend }= useContext(FriendsContext);

    const onCreateClicked = () => {
        const newFriend = {
            id: uuid(),
            name,
            profilePicUrl,
            age,
            bio,
            dob,
            interests: interests.split(',').map(str => str.trim()),
        }
        addFriend(newFriend);
        const navigate = Navigate();
        navigate('/');
    }

    return(
        <>
            <h1>Add a New Friend</h1>
            <div className={styles.infoForm}>
                <label htmlFor='name'>Name:</label>
                <input id='name' placeholder='John Doe' type ='text' value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor='age'>Age:</label>
                <input id='age' placeholder='Age' type='number' value={age} onChange={e=>setAge(e.target.value)} />
                <label htmlFor='profile-pic-url'>Profile Picture Url</label>
                <input id='profile-pic-url' placeholder='https://.....' type ='text' value={profilePicUrl} onChange={e => setProfilePicUrl(e.target.value)} />
                <label htmlFor='bio'>Bio:</label>
                <textarea id='bio' placeholder='Bio' type='text' value={bio} onChange={e => setBio(e.target.value)} />
                <label htmlFor='dob'>Date of Birth:</label>
                <input id='dob' placeholder='DOB' type='text' value={dob} onChange ={e => setDob(e.target.value)} />
                <label htmlFor='interests'>Interests (Separate with commas ","):</label>
                <input id='interests' placeholder='Interests' type='text' value={interests} onChange={e => setInterests(e.target.value)} />
                <button onClick={onCreateClicked}>Add Friend</button>
            </div>
        </>

    )
}

export { NewFriendPage }