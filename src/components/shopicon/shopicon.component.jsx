import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./shop.style.scss";
import { connect } from "react-redux";
import {setHidden} from '../../redux/dropdown/dropdown.actions'
const Shopicon = ({numberOfShops,ToggleCondition}) => (
  <div className="shop-icon" onClick={ToggleCondition}>
    <div className="icon">
      <ShoppingCartIcon />
    </div>
    <div className="number">{numberOfShops}</div>
  </div>
);

const mapDispatchToProps=(dispatch)=>({

  ToggleCondition:()=>dispatch(setHidden())
})
const mapStateToProps=({dropdownItem:{dropdownItems}})=>({
numberOfShops:  dropdownItems.reduce((accumulator,item)=>accumulator+item.quantity,0)


})
export default connect(mapStateToProps, mapDispatchToProps)(Shopicon)
