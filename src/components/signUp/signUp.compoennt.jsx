import React from "react";
import "./signUp.style.scss";
import InputForm from "../input/input.component";
import ButtonForm from "../button/button.component";
import { auth, objectCRUD } from "../../firebase/firebase.utils.js";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      confirmation: "",
      name: "",
      familyName: "",
      displayName:"ParsaKalantari"
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async submitHandler(event) {
    event.preventDefault();
    const { password, email, confirmation, name, familyName,displayName } = this.state;
    if (password !== confirmation) {
      alert("your password is mismatched");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await objectCRUD(user, {displayName});

      this.setState({
        password: "",
        email: "",
        confirmation: "",
        name: "",
        familyName: "",
        displayName:"Parsakalantari"
      });
    } catch (error) {
      console.log("i am error",error.message)
    }
  }
  render() {
    return (
      <div className="signup">
        <div className="signup-title">Please Sign Up here</div>
        <form onSubmit={this.submitHandler}>
          <InputForm
            changehandler={this.handleChange}
            name="name"
            value={this.state.name}
            typeInput="text"
            placeholder="for example:Pouria"
            label="Name:"
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="text"
            placeholder="for example:kalantari"
            label="FamilyName:"
            name="familyName"
            value={this.state.familyName}
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="password"
            placeholder="for example:123456"
            label="Password:"
            name="password"
            value={this.state.password}
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="password"
            placeholder=" for example:123456"
            label="Confirmation"
            name="confirmation"
            value={this.state.confirmation}
          />
          <InputForm
            changehandler={this.handleChange}
            typeInput="email"
            placeholder="youremail@example.com"
            label="Email:"
            name="email"
            value={this.state.email}
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
  }
}
export default SignUp;
