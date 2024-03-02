export const inscreaseCount = () => {
  return (dispatch) => {
    dispatch({ type: "INCREASE_COUNT" });
  };
};

export const descreaseCount = () => (dispatch) => {
  dispatch({ type: "DECREASE_COUNT" });
};