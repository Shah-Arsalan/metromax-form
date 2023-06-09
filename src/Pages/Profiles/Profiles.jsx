import './Profiles.css'
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { useNavigate } from 'react-router';

const Profiles = () => {
    const navigate = useNavigate();
const profiles = JSON.parse(localStorage.getItem("Profiles"));
console.log('the profile page',profiles)
    return (<>
        <div className="profiles-container">
            <div className="titles">
            <p>Name</p>
                <p>Ph NO</p>
                <p>Email</p>
                <p>Gender</p>
                <p>D-O-B</p>
                <p>City</p>
                <p>State</p>
                <p>Action</p>

            </div>
            {   profiles.map((ele) => {
            return <ProfileCard ele={ele}/>
        })}
        </div>
        <button onClick={()=>navigate('/')}>Back</button>
        </>
     
    )
}

export {Profiles}