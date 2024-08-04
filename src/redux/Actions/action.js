// Action creators (Rule-2 Create Action Creater Function)
import { INCREMENT, DECREMENT } from "../Constants/constant";
// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
