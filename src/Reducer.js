const reducer = (state, action) => {
  switch (action.type) {
    case "DATA":
      return {
        ...state,
        value: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
