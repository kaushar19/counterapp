import { INCREMENT, DECREMENT } from "../Constants/constant";
// Initial state (Rule-3 Define Initial State in Reducer File)
const initialState = {
  count: 0,
};

// Reducer (Rule-4 Create Reducer Function)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
export default counterReducer;
