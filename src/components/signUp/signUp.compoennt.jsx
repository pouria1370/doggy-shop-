import React, { useState } from "react";
import "./signUp.style.scss";
import InputForm from "../input/input.component";
import ButtonForm from "../button/button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/authentication/authenticationActions.js";
const SignUp = ({ signUpStart }) => {
  const [ userCredectial, setCredential ] = useState({
    password: "",
    email: "",
    confirmation: "",
    name: "",
    familyName: "",
    displayName: "ParsaKalantari",
  });
  
  const handleChange = (event) => {
    const { name, value } =event.target;
    
    setCredential({ ...userCredectial,[name]: value });
  };
  const{password,email,confirmation,name,familyName,displayName} = userCredectial;

  const submitHandler = (event, ) => {
    event.preventDefault();
    if (password !== confirmation) {
      alert("your password is mismatched");
      return;
    }
    signUpStart(email, password);

    setCredential( {...userCredectial,
      password: "",
      email: "",
      confirmation: "",
      name: "",
      familyName: "",
      displayName: "Parsakalantari",
    });
  };
  return (
    <div className="signup">
      <div className="signup-title">Please Sign Up here</div>
      <form onSubmit={submitHandler}>
        <InputForm
          changehandler={handleChange}
          name="name"
          value={name}
          typeInput="text"
          placeholder="for example:Pouria"
          label="Name:"
        />
        <InputForm
          changehandler={handleChange}
          typeInput="text"
          placeholder="for example:kalantari"
          label="FamilyName:"
          name="familyName"
          value={familyName}
        />
        <InputForm
          changehandler={handleChange}
          typeInput="password"
          placeholder="for example:123456"
          label="Password:"
          name="password"
          value={password}
        />
        <InputForm
          changehandler={handleChange}
          typeInput="password"
          placeholder=" for example:123456"
          label="Confirmation"
          name="confirmation"
          value={confirmation}
        />
        <InputForm
          changehandler={handleChange}
          typeInput="email"
          placeholder="youremail@example.com"
          label="Email:"
          name="email"
          value={email}
        />
        <div className="buttons">
          <ButtonForm
            buttonName="Sign up"
            type="submit"
            changeHandler={() =>
              console.log("i am fired up as SENT in SignIn_component")
            }
          />
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password) => dispatch(signUpStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignUp);
