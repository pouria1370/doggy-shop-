import React from "react";
import "./signIn.component.scss";
import ButtonForm from "../button/button.component";
import InputForm from "../input/input.component";
import {signWithGoogle} from '../../firebase/firebase.utils'






class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
    this.ChangeHandler = this.ChangeHandler.bind(this);
  }

  ChangeHandler(event) {
    const {name,value} = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="signIn">
        <div className="signIn-title">
          Please Sign in here 
        </div>
        <form >
        <div>
          <InputForm
            changehandler={this.ChangeHandler}
            name="email"
            value={this.state.email}
            typeInput="email"
            placeholder="for example:youremail@example.com"
            label="Email:"
          />
          <InputForm
            changehandler={this.ChangeHandler}
            typeInput="password"
            placeholder="for example:123456"
            label="Password:"
            name="password"
            value={this.state.password}
          />
        </div>
        <div className="buttons">
          <ButtonForm
            buttonName="Sign in"
            type="submit"
            changeHandler={() =>
              console.log("i am fired up as SENT in SignIn_component")
            }
          />
          <ButtonForm
            buttonName="Submit with Google"
            type="submit"
            changeHandler={signWithGoogle}
          />
        </div>
        </form> 
      </div>
    );
  }
}

export default SignIn;
