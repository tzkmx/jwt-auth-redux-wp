const initialState = {
  isAuthenticating: false,
  currentUser: null,
  errorMessage: null
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
        ...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage
      }
    case 'LOGIN_SUCCESS':
      return {
        isAuthenticating: false,
        currentUser: action.user,
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
