// @Feedback: It is great if the file and the default export are named the same.
const loggedReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload && action.payload.token) {
        return action.payload;
      }

      return state;
    default:
      return state;
  }
};

export default loggedReducer;
