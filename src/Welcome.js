import PropTypes from 'prop-types';
import styles from './Welcome.module.css';


const WelcomeMessage = ({name}) => {
    return(
            <h2 className={styles.welcomeMessage}>Welcome to Friend Tracker, {name}</h2>
    );
};

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
}

export { WelcomeMessage };