import PropTypes from 'prop-types'
import styles from './ProfileInfo.module.css';
import { Tag } from './Tag';

const ProfileInfo = ({
    person: { profilePicUrl, name, age, bio, dob, interests },
    onToggleFavorite = () => {}
}) => {
    // props destructered
    const displaySummary = message =>{
        alert(`${name} is ${age} years old. ${message}`)
    }
    return (
        <>
        <div className={styles.profilePicContainer}>
            <div className={styles.profilePicWrap}>
                <img 
                className={styles.profilePic}
                src= {profilePicUrl}
                alt={`${name} smiling`} />
            </div>
        </div>
        <button onClick={() => displaySummary('Hi there.')}>Display Summary</button>
        <h3 className = {styles.detailHeading}>Name</h3>
        <p>{name}</p>
        <h3 className = {styles.detailHeading}>Age</h3>
        <p>{age}</p>
        <h3 className = {styles.detailHeading}>Bio</h3>
        <p>{bio}</p>
        <h3 className = {styles.detailHeading}>Birthday</h3>
        <p>{dob}</p>
        <h3 className = {styles.detailHeading}>Interests</h3>
        {interests.map(interest => <Tag key = {interest} text ={interest} />)}
        <button onClick={onToggleFavorite} className ={styles.actionButton}>Toggle Favorite</button>
        </>
      );
}

ProfileInfo.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number,
        bio: PropTypes.string,
        dob: PropTypes.string,
        interests: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
}

export {ProfileInfo}