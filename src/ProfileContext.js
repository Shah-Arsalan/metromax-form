import { useContext, useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';


const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {

    const [profiles, setProfiles] = useState(JSON.parse(localStorage.getItem("Profiles")) ?? []);
    const [isBeingEdited , setIsBeingEdited] = useState(false);
    const [currentProfile , setCurrentProfile] = useState(null);

    const [profileDetails, setprofileDetails] = useState({
        id : uuidv4(),
        fullname: "",
        phno: "",
        email: "",
        state: "",
        city: "",
        dob: "",
        gender: "",
      });

  return (
    <ProfileContext.Provider
      value={{ profiles , setProfiles , profileDetails , setprofileDetails , isBeingEdited , setIsBeingEdited, currentProfile , setCurrentProfile}}
    >
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => useContext(ProfileContext);

export { ProfileProvider, useProfile };
