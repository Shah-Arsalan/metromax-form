import { useNavigate } from 'react-router';
import { useProfile } from '../../ProfileContext';
import './ProfileCard.css'

const ProfileCard = ({ele}) => {
    const navigate = useNavigate(); // for navigation 
    const {profiles , setProfiles , setprofileDetails , setCurrentProfile , setIsBeingEdited} = useProfile(); // use of context 
    
    // deletes specified user from local storage 
    const deleteHandler = (ele) => {
        const newProfiles= profiles.filter(element => element.id !== ele.id );
        localStorage.setItem(
            "Profiles",
            JSON.stringify(newProfiles)
          );
setProfiles(newProfiles);  // necessary to render new data on listing page as it changes state there
    }


// sets edit state to true based on which we determine whether to edit or not in forms file - saveProfile() function
    const editHandler = (ele) => {
        setIsBeingEdited(true);
        setCurrentProfile(ele);
        setprofileDetails(ele);
        navigate('/');
    }

    return (
        <tr>
        <td>{ele.fullname}</td>
        <td>{ele.phno}</td>
        <td>{ele.email}</td>
        <td>{ele.gender}</td>
        <td>{ele.dob}</td>
        <td>{ele.city}</td>
        <td>{ele.state}</td>
        <td><button className='btn-modal'  onClick={()=>deleteHandler(ele) }>Delete</button><button className='btn-modal ml-1' onClick={()=>editHandler(ele)}>Edit</button></td>
      </tr>
    )
}


export {ProfileCard}