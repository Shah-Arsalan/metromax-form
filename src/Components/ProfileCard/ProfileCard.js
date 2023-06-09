import { useNavigate } from 'react-router';
import { useProfile } from '../../ProfileContext'
import './ProfileCard.css'

const ProfileCard = ({ele}) => {
    const navigate = useNavigate();
    const {profiles , setProfiles , setprofileDetails , setCurrentProfile , setIsBeingEdited} = useProfile();
    const deleteHandler = (ele) => {
        const newProfiles= profiles.filter(element => element.id !== ele.id );
        localStorage.setItem(
            "Profiles",
            JSON.stringify(newProfiles)
          );
setProfiles(newProfiles);
    }

    const editHandler = (ele) => {
        setIsBeingEdited(true);
        setCurrentProfile(ele);
        setprofileDetails(ele);
        navigate('/');
    }

    return (
        <div className="profile-card">
                <p>{ele.fullname}</p>
                <p>{ele.phno}</p>
                <p>{ele.email}</p>
                <p>{ele.gender}</p>
                <p>{ele.dob}</p>
                <p>{ele.city}</p>
                <p>{ele.state}</p>
                <div><button  onClick={()=>deleteHandler(ele) }>Delete</button><button onClick={()=>editHandler(ele)}>edit</button></div>
        </div>
    )
}


export {ProfileCard}