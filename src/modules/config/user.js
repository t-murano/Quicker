export default {
  enterGroupMessages (cb) {
    this.onChange(true)
    if (cb) { cb(true) }
  },
  leaveGroupMessages (cb) {
    this.onChange(false)
    if (cb) { cb(false) }
  },
  onChange () {}
}
