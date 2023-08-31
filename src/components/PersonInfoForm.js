import { useState } from 'react';
import styles from './PersonInfoForm.module.css';
import PropTypes from 'prop-types';

const PersonInfoForm = ({ person = {}, onSubmit = () => {}, buttonText= 'Submit' }) => {
    const [profilePicUrl, setProfilePicUrl] = useState(person.profilePicUrl || '')
    const [name, setName] = useState(person.name || '');
    const [age, setAge] = useState(person.age || '');
    const [bio, setBio] = useState(person.bio || '');
    const [dob, setDob] = useState(person.dob || '');
    const [interests, setInterests] = useState(person.interests && person.interests.join(', ') || '');

    const onCreateClicked = () => {
        const newFriend = {
            name,
            profilePicUrl,
            age,
            bio,
            dob,
            interests: interests.split(',').map(str => str.trim()),
        }
        onSubmit( newFriend );
    }

    return(
        <>
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
                <button onClick={onCreateClicked}>{buttonText}</button>
            </div>
        </>
    )
}

PersonInfoForm.propTypes ={
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        dob: PropTypes.string,
        interests: PropTypes.arrayOf(PropTypes.string),
    }), 
    onSubmit: PropTypes.func, 
    buttonText: PropTypes.string,
}

export { PersonInfoForm };