export const auth = (token, refreshToken) => {
  return {
    type: 'LOGIN',
    payload: {
      token,
      refreshToken
    }
  }
}
