import styles from './PersonCard.module.css';
import PropTypes from 'prop-types';

const PersonCard = ({
    person: { profilePicUrl, name, age }
}) => {
    return (
        <div className = {styles.card}>
            <div className = {styles.profilePicLeft}>
                <div className = {styles.profilePicWrap}>
                    <img
                        className = {styles.profilePic}
                        src = {profilePicUrl}
                        alt = "" />
                </div>
            </div>
            <div className = {styles.cardDetails}>
                <h3>Name</h3>
                <p>{name}</p>
                <h3>Age</h3>
                <p>{age}</p>
            </div>
        </div>
    )
}

PersonCard.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profilePicUrl: PropTypes.string,
        age: PropTypes.number
    }).isRequired,
};

export {PersonCard};