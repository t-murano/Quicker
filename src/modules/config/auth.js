import Rebase from 're-base'

const base = Rebase.createClass('https://taube.firebaseio.com')

export default {
  loggedIn () {
  	return !!base.getAuth()
  },
  login (cb) {
		base.authWithOAuthPopup('github', (err, authData) => {
			if (err) { console.log("Login Failed!", err) }
				else {
					// console.log("Authenticated successfully with payload:", authData)
					this.onChange(true)
          if (cb) { cb(authData) }
				}
		})
  },
  logout (cb) {
  	base.unauth()
  	this.onChange(false)
    cb()
  },
  onChange() {}
}
