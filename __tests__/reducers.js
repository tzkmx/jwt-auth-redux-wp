import {reducer} from '../src/reducers'

describe('reducer', () => {
  it('returns default state if no action passed', () => {
    const expectedState = {
      isAuthenticating: false,
      currentUser: null,
      errorMessage: null,
      token: null
    }
    expect(reducer()).toEqual(expectedState)
  })

  it('stores token and user data on successful login', () => {
    const prevState = {
      isAuthenticating: true,
      currentUser: null,
      errorMessage: null,
      token: null
    }
    const action = {
      type: 'LOGIN_SUCCESS',
      payload: {
        token: 'test',
        name: 'Administrator',
        email: 'user@example.com'
      }
    }
    const expectedState = {
      isAuthenticating: false,
      currentUser: { name: action.payload.name, email: action.payload.email },
      token: 'test',
      errorMessage: null
    }
    expect(reducer(prevState, action)).toEqual(expectedState)
  })

  it('stores error message on failed login', () => {
    const prevState = {
      isAuthenticating: true,
      currentUser: null,
      errorMessage: null,
      token: null
    }
    const action = {
      type: 'LOGIN_FAILURE',
      error: true,
      payload: new Error({
        message: 'test wrong user msg',
        status: 403
      }),
      meta: {
        message: 'Unknown username'
      }
    }
    const expectedState = {
      isAuthenticating: false,
      currentUser: null,
      token: null,
      errorMessage: action.meta.message
    }
    expect(reducer(prevState, action)).toEqual(expectedState)
  })
})
