const loggedReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      if (action.payload && action.payload.token) {
        return action.payload;
      }

      return state;
    default:
      return state;
  }
}

export default loggedReducer;
