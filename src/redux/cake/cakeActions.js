import { BUY_CAKE } from "./cakeTypes";

//ACTION CREATOR
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
