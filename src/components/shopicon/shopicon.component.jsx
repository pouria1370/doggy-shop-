import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./shop.style.scss";
import { connect } from "react-redux";
import {setHidden} from '../../redux/dropdown/dropdown.actions'
const Shopicon = ({ToggleCondition}) => (
  <div className="shop-icon" onClick={ToggleCondition}>
    <div className="icon">
      <ShoppingCartIcon />
    </div>
    <div className="number">0</div>
  </div>
);

const mapDispatchToProps=(dispatch)=>({

  ToggleCondition:()=>dispatch(setHidden())
})

export default connect(null, mapDispatchToProps)(Shopicon)
