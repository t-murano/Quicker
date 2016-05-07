export default {
  enter (cb) {
    console.log('user enter room')
    this.onChange(true)
  	if (cb) { cb(user) }
  },
  leave (cb) {
    console.log('user leave room')
    this.onChange(false)
		if (cb) { cb(false) }
  },
  onChange() {}
}
