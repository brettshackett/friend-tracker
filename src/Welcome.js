// import { myProfileData } from "./data"
import './Welcome.css'


export const WelcomeMessage = ({name}) => {
    return(
            <h2 className="welcome-message">Welcome to Friend Tracker, {name}</h2>
    )
}