const initial = {
  email: "",
};
const userReducer = (state = initial, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
