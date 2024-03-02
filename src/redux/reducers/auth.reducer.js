const initialState = {
  count: 0,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { ...state, count: state.count + 1 };

    case "DECREASE_COUNT":
      if (state.count != 0) {
        return { ...state, count: state.count - 1 };
      } else {
        alert("lklk");
      }

    default:
      return state;
  }
};
