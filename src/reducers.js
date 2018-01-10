const initialState = {
  isAuthenticating: false,
  currentUser: null,
  errorMessage: null,
  token: null
}

export const reducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isAuthenticating: true
      }
    case 'LOGIN_FAILURE':
      return {
        token: null,
        currentUser: null,
        isAuthenticating: false,
        errorMessage: action.meta.message
      }
    case 'LOGIN_SUCCESS':
      let { name, email, token } = action.payload
      return {
        isAuthenticating: false,
        token,
        currentUser: {
          name,
          email
        },
        errorMessage: null
      }
    case 'LOGOUT':
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null
      }
    default:
      return state
  }
}
