import { useContext } from 'react';
import { FriendsContext } from '../contexts/FriendsContext';
import { useNavigate } from 'react-router-dom';
import { PersonInfoForm } from '../components/PersonInfoForm';
import { v4 as uuid} from 'uuid';

const NewFriendPage = () => {
    const { addFriend }= useContext(FriendsContext);
    const navigate = useNavigate();

    const onFormSubmit = friendInfo => {
        const newFriend = {
            ...friendInfo,
            id: uuid()
        }
        addFriend(newFriend);
        navigate('/');
    }

    return(
        <>
            <h1>Add a New Friend</h1>
            <PersonInfoForm onSubmit={onFormSubmit} buttonText='Create' />
        </>

    )
}

export { NewFriendPage }