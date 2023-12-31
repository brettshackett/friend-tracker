import PropTypes from 'prop-types'
import styles from './ProfileInfo.module.css';
import { Tag } from './Tag';

const ProfileInfo = ({
    person: { profilePicUrl, name, age, bio, dob, interests },
    actions = [],
}) => {
    // props destructered

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
        {actions.map(action => (<button 
                                key={action.actionName} 
                                onClick={action.handler} 
                                className ={styles.actionButton}>
                                    {action.actionName}
                                    </button>))}
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
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            actionName: PropTypes.string.isRequired,
            onAction: PropTypes.func.isRequired,
        })
    )
}

export {ProfileInfo}