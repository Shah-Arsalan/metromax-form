import './ProfileCard.css'

const ProfileCard = ({ele}) => {

    return (
        <div className="profile-card">
                <p>{ele.fullname}</p>
                <p>{ele.phno}</p>
                <p>{ele.email}</p>
                <p>{ele.gender}</p>
                <p>{ele.dob}</p>
                <p>{ele.city}</p>
                <p>{ele.state}</p>
                <div><p>Delete</p><p>edit</p></div>
        </div>
    )
}


export {ProfileCard}