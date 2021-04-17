import React from "react";
import "./signUp.style.scss";
import InputForm from "../input/input.component";
import ButtonForm from "../button/button.component";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      confirmation: "",
      name: "",
      familyName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="signup">
        <div className="signup-title">
          Please Sign Up here and put your password and email
        </div>
        <div>
          <InputForm
            changehandler={this.handleChange}
            name="name"
            value={this.state.name}
            typeInput="text"
            placeholder="your Name"
            label="Name:"
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="text"
            placeholder="your FamilyName"
            label="FamilyName:"
            name="familyName"
            value={this.state.familyName}
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="password"
            placeholder="your password"
            label="Password:"
            name="password"
            value={this.state.password}
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="password"
            placeholder=" Confirmation"
            label=" Confirmation Password:"
            name="confirmation"
            value={this.state.confirmation}
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="email"
            placeholder="your email"
            label="Email:"
            name="email"
            value={this.state.email}
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
        </div>
      </div>
    );
  }
}
export default SignUp;
