import {reducer} from '../src/reducers'

describe('reducer', () => {
  it('returns default state if no action passed', () => {
    const expectedState = {
      isAuthenticating: false,
      currentUser: null,
      errorMessage: null
    }
    expect(reducer()).toEqual(expectedState)
  })
})
