import { createStore } from "redux";
// Create store (Rule-5 Create Store and Connect it with reducer)
import counterReducer from "./reducers/reducer";
const store = createStore(counterReducer);

export default store;
