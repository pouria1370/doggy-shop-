import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./shop.style.scss";
import { connect } from "react-redux";
import { setHidden } from "../../redux/dropdown/dropdown.actions";
import {createStructuredSelector} from 'reselect'
import {accumulatorDropdownItemSelector} from '../../redux/dropdown-item/dropdownItemSelector'



const Shopicon = ({ numberOfShops, ToggleCondition }) => (
  <div className="shop-icon" onClick={ToggleCondition}>
    <div className="icon">
      <ShoppingCartIcon />
    </div>
    {numberOfShops > 0 ? <div className="number">{numberOfShops}</div> : null}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCondition: () => dispatch(setHidden()),
});
const mapStateToProps = createStructuredSelector ({
  numberOfShops: accumulatorDropdownItemSelector
});
export default connect(mapStateToProps, mapDispatchToProps)(Shopicon);
