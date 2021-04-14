import "./App.css";
import Homepage from "./pages/homepage/homepage.jsx";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shop/shop.page";
import Footer from './components/footer/footer.component'
function App() {
  return (
    <div className="App">
      
      <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shoppage} />
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
