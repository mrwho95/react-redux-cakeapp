import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

//display number of cakes
//step 1: define new function
const mapStateToProps = (state) => {
  return {
    //selector returns some state information from the redux, in this case selectiong number of cake is straightforward
    //select what will return in large application
    numOfCakes: state.numOfCakes,
  };
};

//step 2: define new function
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//step 3: connect these functions with react components
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
