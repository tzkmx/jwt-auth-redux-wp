
const loginAction = (username, password) => {
  return dispatch => {
    dispatch({ type: 'LOGIN_REQUEST' })


  }
}

const successAuth = ({token, user_email, user_nicename, user_display_name}) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      token,
      name: user_display_name,
      email: user_email
    }
  }
}

const failedAuth = ({ message, data, code }) => {
  const actionTemplate = {
    type: 'LOGIN_FAILURE',
    payload: new Error({message, status: data.status}),
    error: true
  }
  switch(code) {
    case '[jwt_auth] incorrect_password':
      return {
        ...actionTemplate,
        meta: { message: 'Bad password' }
      }
    case '[jwt_auth] invalid_username':
      return {
        ...actionTemplate,
        meta: { message: 'Unknown username' }
      }
    default:
      return actionTemplate
  }
}

export {
  failedAuth,
  successAuth
}