import * as actions from '../src/actions'

describe('actions', () => {

  describe('failed login', () => {

    it('can return a well formed failed password action', () => {
      const response = {
        "code": "[jwt_auth] incorrect_password",
        "message": "password given for user is wrong",
        "data": {
          "status": 403
        }
      }
      const expectedAction = {
        type: 'LOGIN_FAILURE',
        error: true,
        payload: new Error({
          message: response.message,
          status: 403
        }),
        meta: {
          message: 'Bad password'
        }
      }

      expect(actions.failedAuth(response)).toEqual(expectedAction)
    })

    it('can return a well formed wrong username action', () => {
      const response = {
        "code": "[jwt_auth] invalid_username",
        "message": "username not exists",
        "data": {
          "status": 403
        }
      }
      const expectedAction = {
        type: 'LOGIN_FAILURE',
        error: true,
        payload: new Error({
          message: response.message,
          status: 403
        }),
        meta: {
          message: 'Unknown username'
        }
      }

      expect(actions.failedAuth(response)).toEqual(expectedAction)
    })
  })

  describe('successful login', () => {

    it('return an action with token and name of the user', () => {
      const response = {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuY29tIiwic3ViIjoidXNlckBleGFtcGxlLmNvbSIsIm5iZiI6MTUxNTU1NTI0OSwiZXhwIjoxNTE1NTU4ODQ5LCJpYXQiOjE1MTU1NTUyNDksImp0aSI6InVzZXIifQ._GnrUdLCLdxrteOaAA-HtXci_eBRhdkQLJ5w7u0g7qY",
        "user_email": "user@example.com",
        "user_nicename": "admin",
        "user_display_name": "Administrator"
      }
      const expectedAction = {
        type: 'LOGIN_SUCCESS',
          payload: {
          token: response.token,
          name: response.user_display_name,
          email: response.user_email
        }
      }
      expect(actions.successAuth(response)).toEqual(expectedAction)
    })
  })
})
