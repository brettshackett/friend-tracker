import styles from './NewFriendCard.module.css';
import PropTypes from 'prop-types'

const NewFriendCard = ({ onClick = () => {} }) => {
    return(
        <div className={styles.cardContainer} onClick={onClick}>
            <h3>+ Add New Friend</h3>
        </div>
    )
};

NewFriendCard.propTypes = {
    onClick: PropTypes.func,
}

export { NewFriendCard };