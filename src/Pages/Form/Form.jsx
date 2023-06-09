import "./Form.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
  const [appear, setAppear] = useState(false);
  const [profiles, setProfiles] = useState(JSON.parse(localStorage.getItem("Profiles")) ?? []);

  const [profileDetails, setprofileDetails] = useState({
    fullname: "",
    phno: "",
    email: "",
    state: "",
    city: "",
    dob: "",
    gender: "",
  });

  const saveProfile = () => {
    setProfiles([...profiles, profileDetails]);
  };


console.log('new prfiles are', profiles);

  const showErrorModal = (string) => {
console.log(string);
  }

  useEffect(() => {
    localStorage.setItem(
        "Profiles",
        JSON.stringify(profiles)
      );
      console.log('here is arsaaln')
  },[profiles])

  
 

  return (
    <div className="profile-page">
    <button onClick={()=>navigate('/profiles')}>Move to Profiles Page</button>
      <div className="login-container">
        <div className="login-inputs">
          <h1>Add a new Profile</h1>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (profileDetails.fullname.length === 0) {
                showErrorModal("Enter Name")
              } else if (profileDetails.phno.length !== 10) {
                showErrorModal("Enter Valid Phone Number")
              } else if (profileDetails.state.length === 0) {
                showErrorModal("Enter State")
              }
              else if (profileDetails.city.length === 0) {
                showErrorModal("Enter city")
              }
              else if (profileDetails.dob.length === 0) {
                showErrorModal("Enter proper DOB")
              }
              else if (profileDetails.gender.length === 0) {
                showErrorModal("Select your gender")
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
              <label htmlFor="gender">Gender</label>
              <label htmlFor="gender-1">Male</label>
              <input
                id="gender-1"
                value="male"
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

              <label htmlFor="gender-2">Female</label>
              <input
                id="gender-2"
                value="female"
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

            <div className="input btn-input">
              <button
                type="submit"
                className="primary-button"
              >
                Add Profile
              </button>
            </div>
          </form>
        </div>
      </div>
      {appear && (
        <div className="error-msg">
          <p></p>
          <p
            className="cross"
            onClick={() => {
              setAppear((prev) => !prev);
            }}
          >
            ❌
          </p>
        </div>
      )}
    </div>
  );
};

export { Form };
