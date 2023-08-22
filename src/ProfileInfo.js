import './ProfileInfo.css';

export const ProfileInfo = ({
    person: { profilePicUrl, name, age, bio, dob, interests }
}) => {
    // props destructered

    return (
        <>
        <div className="profile-pic-container">
            <div className="profile-pic-wrap">
                <img 
                className='profile-pic'
                src= {profilePicUrl}
                alt={`${name} smiling`} />
            </div>
        </div>
            <h2 className="content-heading">My Profile</h2>
            <h3>Name</h3>
            <p>{name}</p>
            <h3>Age</h3>
            <p>{age}</p>
            <h3>Bio</h3>
            <p>{bio}</p>
            <h3>Birthday</h3>
            <p>{dob}</p>
            <h3>Interests</h3>
            <p>{interests.join(', ')}</p>
        </>
      );
}