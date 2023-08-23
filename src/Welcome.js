import PropTypes from 'prop-types';
import styles from './Welcome.module.css';
import { useState } from 'react';


const WelcomeMessage = ({name}) => {
    const [isVisible, setIsVisible] = useState(true);


    return isVisible ? (
        <div className={styles.welcomeMessage}>
            <h2>Welcome to Friend Tracker, {name}</h2>
            <button onClick = {() => setIsVisible(false)}>Hide</button>
        </div>
    ): null;
};

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
}

export { WelcomeMessage };