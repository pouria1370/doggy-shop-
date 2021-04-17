import React from "react";
import "./signIn.component.scss";
import ButtonForm from "../button/button.component";
import InputForm from "../input/input.component";







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
          Please Sign in here and put your password and email
        </div>
        <div>
          <InputForm
            changehandler={this.ChangeHandler}
            name="email"
            value={this.state.email}
            typeInput="email"
            placeholder="your email"
            label="Email:"
          />
          <InputForm
            changehandler={this.ChangeHandler}
            typeInput="password"
            placeholder="your password"
            label="Password:"
            name="password"
            value={this.state.password}
          />
        </div>
        <div className="buttons">
          <ButtonForm
            buttonName="Send"
            type="submit"
            changeHandler={() =>
              console.log("i am fired up as SENT in SignIn_component")
            }
          />
          <ButtonForm
            buttonName="Submit with Google"
            type="submit"
            changeHandler={() =>
              console.log(
                "i am fired up as SUBMITWITHGOOGLE in SignIn_component"
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default SignIn;
