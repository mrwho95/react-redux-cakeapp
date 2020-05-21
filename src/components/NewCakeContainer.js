import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
//import {somethings} from "library package";
//import {somethings} from "path"

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

//display number of cakes
//step 1: define new function
const mapStateToProps = (state) => {
  return {
    //selector returns some state information from the redux, in this case selectiong number of cake is straightforward
    //select what will return in large application
    numOfCakes: state.cake.numOfCakes, //cake term from root reducer
  };
};

//step 2: define new function
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

//step 3: connect these functions with react components
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
