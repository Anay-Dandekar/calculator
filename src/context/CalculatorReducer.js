let value;

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case "APPEND":
      if (!state.operation) {
        if (state.firstVal == 0 || state.firstVal == "ERROR") {
          value = action.payload;
        } else {
          value = Number(state.firstVal.toString() + action.payload.toString());
        }
        return {
          ...state,
          firstVal: value,
          equation: [value],
        };
      }
      if (state.secondVal == 0) {
        value = action.payload;
      } else {
        value = Number(state.secondVal.toString() + action.payload.toString());
      }
      return {
        ...state,
        secondVal: value,
        equation: [state.firstVal, state.operation, value],
      };
    case "SET_OPERATION":
      return {
        ...state,
        operation: action.payload,
        equation: [state.firstVal, action.payload],
      };
    case "ADD":
      return { ...state, firstVal: state.firstVal + state.secondVal };
    case "SUBTRACT":
      return { ...state, firstVal: state.firstVal - state.secondVal };
    case "MULTIPLY":
      return { ...state, firstVal: state.firstVal * state.secondVal };
    case "DIVIDE":
      return { ...state, firstVal: state.firstVal / state.secondVal };
    case "DIVIDE_BY_ZERO":
      return {
        firstVal: "ERROR",
        secondVal: 0,
        operation: "",
        equation: [0],
      };
    case "CLEAR":
      if (action.payload == "all") {
        return {
          firstVal: 0,
          secondVal: 0,
          operation: "",
          equation: [0],
        };
      } else if (action.payload == "some") {
        return {
          ...state,
          secondVal: 0,
          operation: "",
          equation: [state.firstVal],
        };
      }
    default:
      return state;
  }
};

export default calculatorReducer;
