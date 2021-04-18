import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shop/shop.page";
import Footer from "./components/footer/footer.component";
import SignInAndSignOut from "./pages/signInAndSignOut/signInAndSignOut.page";
import { auth, objectCRUD } from "../src/firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  subscribe = null;
  componentDidMount() {
    this.subscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await objectCRUD(userAuth);
       userRef.onSnapshot((user) => {
          this.setState({
            currentUser: {
              id: user.id,
              ...user.data(),
            },
          },
          ()=>{console.log(this.state)}
          );
        });
 

      } else
        this.setState({
          currentUser: userAuth,
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Header isGoogleSignedIn={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
          <Route exact path="/signIn" component={SignInAndSignOut} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
