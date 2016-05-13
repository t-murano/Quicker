import React, { Component } from 'react'
import {Icon} from 'react-fa'

export default class HomeContent extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='home'>
        <h1>Quicker</h1>
        <h4>クイッカーは気軽に参加できるグループトークです。</h4>
        <p>クイッカーは簡単にトークができるアプリです。フェイスブックやツイッターのアカウントさえあれば誰でもすぐグループトークに参加ができます。なお、サーバーからは24時間後自動的に会話の情報が消去されます。</p>
        <p className='color-change'>さあ、まずは左側の「新規グループトーク」ボタンを押して初めてください。</p>
        <div>
          <button>
            <Icon size='2x' name='hand-o-left' />
          </button>
          <button>
            <Icon size='2x' name='hand-scissors-o' />
          </button>
        </div>
      </div>
    )
  }
}

HomeContent.propTypes = {
  // user: PropTypes.string.isRequired,
  // icon: PropTypes.string.isRequired
}
