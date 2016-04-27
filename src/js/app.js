// Shorthand for $( document ).ready()
$(function() {

  var myDataRef = new Firebase('https://goheadauth.firebaseio.com/')

  var user = {}
  $('.list').hide()
  $('.load').show()

  /**
   * check user status function
   **/
  function authDataCallback (authData) {
    if (authData) {
      user.name = authData.twitter.username
      user.picture = authData.twitter.profileImageURL

      $('#login').hide()
      $('#logout').text('ログアウト').show()
      $('.list').show()
    } else {
      $('#logout').hide()
      $('#login').show()
      $('.list').hide()
    }
  }

  /**
   * login function
   **/
  function login () {
    myDataRef.authWithOAuthPopup('twitter', function(error, authData) {
      if (error) {
        console.log('Login Failed!', error)
      } else {
        user.name = authData.twitter.username
      }
    }, {
      remember: 'sessionOnly'
    })
  }

  /**
   * msg send
   **/
  function send () {
    var name = user.name
    var text = $('#messageInput').val()
    var now = moment.now()
    myDataRef.push({
      name: name,
      text: text,
      time: now
    })
    $('#messageInput').val('')
  }

  /**
   * login evt
   */
  $('#login').click(function () {
    login()
  })

  $('#logout').click(function () {
    myDataRef.unauth()
  })

  /**
   * msg keypress evt
   */
  $('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
      if (user.name === undefined) {
        login()
      }
      send()
    }
  })

  /**
   * msg keypress evt
   */
  $('#submit').click(function (e) {
    if (user.name === undefined) {
      login()
    }
    e.preventDefault()
    e.stopPropagation()
    send()
  })
  
  // load and show all list
  myDataRef.orderByValue().on('child_added', function (snapshot) {
    $('.load').hide()
    var message = snapshot.val()
    displayChatMessage(message.name, message.text, message.time)
  })

  function displayChatMessage (name, text, time) {
    var msgTime = moment(time).fromNow()
    $('<div class="msg"/>')
      // .text(text + ' || ' + msgTime)
      .text(text).prepend($('<em/>').text('@' + name + ': '))
      .append($('<span class="time"/>').text(msgTime))
      .appendTo($('#messagesDiv'))
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight
  }

  // check login
  myDataRef.onAuth(authDataCallback)
})
