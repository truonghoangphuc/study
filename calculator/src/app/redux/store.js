import { createStore } from "redux";
import { INPUT } from "../redux/actionType";

const initialState = {
  allInputs: [],
  variable1: 0,
  variable2: 0,
  math: "",
}

const calculatorReducer = (state = initialState, action) => {    
    switch (action.type) {
      case INPUT: {
        const { input } = action.payload;
        return {
          ...state,
          allInputs: [...state.allInputs, input],
        };
      }      
      default:
        return state;
    }
}

const store = createStore(calculatorReducer);

export default store;