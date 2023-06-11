import "./Form.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useProfile } from "../../ProfileContext";

const Form = () => {

  // for navigating to other page 
  const navigate = useNavigate();
  
  // for displaying modal upon error or successfull data entry
  const [appear, setAppear] = useState(false);

  // getting data and data setters from context 
  const {
    setProfiles,
    profiles,
    profileDetails,
    setprofileDetails,
    isBeingEdited,
    setIsBeingEdited,
    currentProfile,
    setCurrentProfile,
  } = useProfile();

  // for displaying error with form validation 
  const [errorMessage, setErrorMessage] = useState("");

  // sets data in local storage if it is being edited to render the same profile card with different details otherwise ...
  // just updates profiles got from context
  const saveProfile = () => {
    if (isBeingEdited) {
      const index = profiles.findIndex(
        (profile) => profile.id === currentProfile.id
      );
      const updatedProfile = { ...currentProfile, ...profileDetails };

      if (index !== -1) {
        profiles[index] = updatedProfile;
      }

      localStorage.setItem("Profiles", JSON.stringify(profiles));
      navigate("/profiles");
      setIsBeingEdited(false);
      setCurrentProfile(null);
      setprofileDetails({
        id: uuidv4(),
        fullname: "",
        phno: "",
        email: "",
        state: "",
        city: "",
        dob: "",
        gender: "",
      });
      showErrorModal("Details Saved!");
    } else {
      setprofileDetails({
        ...profileDetails,
        id: uuidv4(),
      });

      setProfiles([...profiles, profileDetails]);
      setprofileDetails({
        id: uuidv4(),
        fullname: "",
        phno: "",
        email: "",
        state: "",
        city: "",
        dob: "",
        gender: "",
      });
      showErrorModal("Details Saved!");
    }
  };

  // shows modal for error and success 
  const showErrorModal = (string) => {
    setAppear(true);
    setErrorMessage(string);
  };

  // runs whenever profiles change and saves data in local storage
  useEffect(() => {
    localStorage.setItem("Profiles", JSON.stringify(profiles));
  }, [profiles]);

  return (
    <>
    <div className="profile-page">
      <div className="details-container">
        <div className="profile-inputs">
          <h1>Add a new Profile</h1>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (profileDetails.fullname.length === 0) {
                showErrorModal("Error! Enter Name");
              } else if (profileDetails.phno.length !== 10) {
                showErrorModal("Error! Enter Valid Phone Number");
              } else if (profileDetails.state.length === 0) {
                showErrorModal("Error! Enter State");
              } else if (profileDetails.city.length === 0) {
                showErrorModal("Error! Enter city");
              } else if (profileDetails.dob.length === 0) {
                showErrorModal("Error! Enter proper DOB");
              } else if (profileDetails.gender.length === 0) {
                showErrorModal("Error! Select your gender");
              } else {
                saveProfile();
              }
            }}
          >
            <div className="input">
              <label htmlFor="full-name">Full Name</label>
              <input
                id="full-name"
                value={profileDetails.fullname}
                placeholder="Abby"
                className="input-txt"
                type="text"
                onChange={(e) =>
                  setprofileDetails({
                    ...profileDetails,
                    fullname: e.target.value,
                  })
                }
              />
            </div>

            <div className="input">
              <label htmlFor="phno">Phone number</label>
              <input
                id="phno"
                placeholder="7006145222"
                value={profileDetails.phno}
                className="input-txt"
                type="text"
                onChange={(e) =>
                  setprofileDetails({
                    ...profileDetails,
                    phno: e.target.value,
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input
                required={true}
                id="email"
                value={profileDetails.email}
                placeholder="user@gmail.com"
                className="input-txt"
                type="email"
                onChange={(e) =>
                  setprofileDetails({
                    ...profileDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="state">State</label>
              <input
                id="state"
                placeholder="Karnataka"
                value={profileDetails.state}
                className="input-txt"
                type="text"
                onChange={(e) =>
                  setprofileDetails({
                    ...profileDetails,
                    state: e.target.value,
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="city">City</label>
              <input
                id="city"
                placeholder="Bengalruru"
                value={profileDetails.city}
                className="input-txt"
                type="text"
                onChange={(e) =>
                  setprofileDetails({
                    ...profileDetails,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                value={profileDetails.dob}
                className="input-txt"
                type="date"
                onChange={(e) =>
                  setprofileDetails({
                    ...profileDetails,
                    dob: e.target.value,
                  })
                }
              />
            </div>

            <div className="input">
            <div className="gender-container">
              <label htmlFor="gender">Gender</label>
              <div className="gender-options">
                <label htmlFor="gender-1">Male</label>
                <input
                  id="gender-1"
                  value="male"
                  checked={profileDetails.gender === "male"}
                  placeholder="user@gmail.com"
                  className="input-txt"
                  type="radio"
                  name="gender"
                  onChange={(e) =>
                    setprofileDetails({
                      ...profileDetails,
                      gender: e.target.value,
                    })
                  }
                />
              </div>
              <div className="gender-options">
                <label htmlFor="gender-2">Female</label>
                <input
                  id="gender-2"
                  value="female"
                  checked={profileDetails.gender === "female"}
                  className="input-txt"
                  type="radio"
                  name="gender"
                  onChange={(e) =>
                    setprofileDetails({
                      ...profileDetails,
                      gender: e.target.value,
                    })
                  }
                />
              </div>
              </div>
            </div>

            <div className="btn-input">
              <button type="submit" className="primary-button">
                Add Profile
              </button>
              <button className="primary-button" onClick={() => navigate("/profiles")}>
        Move to Profiles Page
      </button>
            </div>
          </form>
        </div>
      </div>
    </div>
          {appear && (
            <div className="error-container">
            <div className="error-msg">
              <p>{errorMessage}</p>
              <p
                className="cross"
                onClick={() => {
                  setAppear((prev) => !prev);
                }}
              >

              {errorMessage === 'Details Saved!' ? <button className="btn-modal">OK</button> :'❌' }
                
                
              </p>
            </div>
            </div>
          )}
          </>
  );
};

export { Form };
