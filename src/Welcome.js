import { myProfileData } from "./data"
import './Welcome.css'


export const WelcomeMessage = () => {
    return(
            <h2 className="welcome-message">Welcome to Friend Tracker, {myProfileData.name}</h2>
    )
}