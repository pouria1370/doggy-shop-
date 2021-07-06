import React,{useState} from "react";
import "./signIn.component.scss";
import ButtonForm from "../button/button.component";
import InputForm from "../input/input.component";
import {
  googleSignInStart,
  emailAndPassSignInStart,
} from "../../redux/authentication/authenticationActions";
import { connect } from "react-redux";

const SignIn = ({ emailAndPassSignInStart,googleSignInStart })=>{
  const [userCredential,setCredential]=useState({
    password: "",
    email: "",
  })
  const { password, email } = userCredential;
  
  const ChangeHandler=(event)=> {
    const { name, value } = event.target;
    setCredential({ ...userCredential,[name]: value });
  }
  const submitHandler=(event)=> {
    event.preventDefault();
    emailAndPassSignInStart(email, password);
    setCredential({...userCredential,
      password: "",
      email: "",
    });
  }

    return (
      <div className="signIn">
        <div className="signIn-title">Please Sign in here</div>
        <form onSubmit={submitHandler}>
          <div>
            <InputForm
              changehandler={ChangeHandler}
              name="email"
              value={email}
              typeInput="email"
              placeholder="for example:youremail@example.com"
              label="Email:"
            />
            <InputForm
              changehandler={ChangeHandler}
              typeInput="password"
              placeholder="for example:123456"
              label="Password:"
              name="password"
              value={password}
            />
          </div>
          <div className="buttons">
            <ButtonForm
              buttonName="Sign in"
              type="submit"
              changeHandler={submitHandler}
            />
            <ButtonForm
              buttonName="Submit with Google"
              type="button"
              changeHandler={googleSignInStart}
            />
          </div>
        </form>
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailAndPassSignInStart: (email, password) =>
    dispatch(emailAndPassSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
