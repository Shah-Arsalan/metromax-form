import "./Profiles.css";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { useNavigate } from "react-router";
import { useProfile } from "../../ProfileContext";

const Profiles = () => {
  const { profiles } = useProfile(); // get latest profiles from context 
  const navigate = useNavigate(); // for navigation 
  return (
    <>
    <div className="profiles-container">
    <div className="profile-header font-sans">
        <div className="logo">Profiles</div>
        <button className="btn-profile" onClick={() => navigate("/")}>Add New Profile</button>

    </div>
      <table className="font-sans">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ph Number</th>
            <th>Email</th>
            <th>Gender</th>
            <th>D.O.B</th>
            <th>City</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((ele) => {
            return <ProfileCard ele={ele} />;
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export { Profiles };

