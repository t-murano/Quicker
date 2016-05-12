import Rebase from 're-base'
const base = Rebase.createClass('https://quicker-dev.firebaseio.com')

export default {
  loggedIn () {
    return !!base.getAuth()
  },

  login (providers, cb) {
    if (Boolean(base.getAuth())) {
      this.onChange(true, this.getUser())
      return
    }

    // @NOTE: I think this is probably an anti-pattern.
    if (!providers) {
      return
    }

    base.authWithOAuthPopup(providers, (err, authData) => {
      if (err) {
        console.log('Login Failed!', err)
      } else {
        console.log('Authenticated successfully with payload: ', authData)
        localStorage.setItem('user', JSON.stringify({
          name: base.getAuth()[providers].displayName,
          icon: base.getAuth()[providers].profileImageURL
        }))
        this.onChange(true, this.getUser())
        if (cb) { cb() }
      }
    })
  },
  logout (cb) {
    base.unauth()
    localStorage.clear()
    this.onChange(false, null)
    if (cb) { cb() }
  },
  onChange () {},
  getUser: function () { return JSON.parse(localStorage.getItem('user')) }
}
