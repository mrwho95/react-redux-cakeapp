import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
//import {somethings} from "library package";
//import {somethings} from "path"

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

//display number of cakes
//step 1: define new function
const mapStateToProps = (state) => {
  return {
    //selector returns some state information from the redux, in this case selectiong number of cake is straightforward
    //select what will return in large application
    numOfIceCreams: state.iceCream.numOfIceCreams, //ice cream term from root reducers
  };
};

//step 2: define new function
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

//step 3: connect these functions with react components
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
