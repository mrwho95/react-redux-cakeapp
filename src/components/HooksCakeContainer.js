import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  //selector function receive redux state argument
  const numOfCakes = useSelector((state) => state.numOfCakes);

  //this function returns a reference to the dispatch function from the redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
