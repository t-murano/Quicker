import React, { Component } from 'react'
import SkyLight from 'react-skylight'

export default class ChatNew extends Component {
  constructor(props) {
    super(props)
  }
  _executeAfterModalClose (){
    alert('Executed after close')
  }
  render () {
    var testDialog = {
      backgroundColor: '#000',
      border: '1px solid #00bfff'
    };
    // onCloseClicked={() => this.hide()}
    // afterClose
    // <button onClick={}>CREATE GROUP CHAT</button>
    return (
      <div>
        <li><a href="#" onClick={() => this.refs.simpleDialog.show()}>▶︎ createNewChat</a></li>
        <SkyLight
          dialogStyles={testDialog}
          afterClose={this._executeAfterModalClose}
          ref="simpleDialog"
          title="CREATE CHATROOM">
          <form>
            <input type='text' id="chatGroupName" placeholder='chatGroupName' />
            <hr />
            <input type='text' id="chatGroupKeyword" value='IAd6ATt2xm23' disabled />
            <hr />
            <input type='submit' value='CREATE GROUP CHAT' />
          </form>

        </SkyLight>
      </div>
    )
  }
}
