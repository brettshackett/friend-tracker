import PropTypes from 'prop-types';
import styles from './Welcome.module.css';
import { useState } from 'react';


const WelcomeMessage = ({name}) => {
    const hasBeenHidden = localStorage.getItem('welcomeMessageHidden');
    const [isVisible, setIsVisible] = useState(!hasBeenHidden);

    const hide = () => {
        setIsVisible(false);
        localStorage.setItem('welcomeMessageHidden', true);
    }

    return isVisible ? (
        <div className={styles.welcomeMessage}>
            <h2>Welcome to Friend Tracker, {name}</h2>
            <button onClick = {hide}>Hide</button>
        </div>
    ): null;
};

WelcomeMessage.propTypes = {
    name: PropTypes.string.isRequired,
}

export { WelcomeMessage };