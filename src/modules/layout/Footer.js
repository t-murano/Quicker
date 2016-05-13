import React, { Component } from 'react'

export default class Typing extends Component {
  constructor (props) {
    super(props)
  }

  // 2
  componentDidMount () {
  }

  // 1
  componentWillMount () {
  }

  render () {
    return (
      <div>
        <div className='grid-3-center'>
          <code className='col-9'>Copyright © 2016 <a href='https://github.com/jinmayamashita'>Jinma Yamashita</a>. All rights reserved · Code licensed under MIT License</code>
          {/*GitHub Project · Issues*/}
          <div className='col-9'>
            <a className='github-button'
               href='https://github.com/jinmayamashita/quicker'
               data-icon='octicon-star'
               data-count-href='/jinmayamashita/quicker/stargazers'
               data-count-api='/repos/jinmayamashita/quicker#stargazers_count'
               data-count-aria-label='# stargazers on GitHub'
               aria-label='Star jinmayamashita/quicker on GitHub'>
               Star
            </a>
            <a className='github-button'
               href='https://github.com/jinmayamashita/quicker/fork'
               data-icon='octicon-repo-forked'
               data-count-href='/jinmayamashita/quicker/network'
               data-count-api='/repos/jinmayamashita/quicker#forks_count'
               data-count-aria-label='# forks on GitHub'
               aria-label='Fork jinmayamashita/quicker on GitHub'>
               Fork
            </a>
            <a className='github-button'
               href='https://github.com/jinmayamashita/quicker/issues'
               data-icon='octicon-issue-opened'
               data-count-api='/repos/jinmayamashita/quicker#open_issues_count'
               data-count-aria-label='# issues on GitHub'
               aria-label='Issue jinmayamashita/quicker on GitHub'>
               Issue
            </a>
            <a href='https://twitter.com/quickermessage'
               className='twitter-follow-button'
               data-show-count='true'>
               Follow @quickermessage
            </a>
          </div>
        </div>
      </div>
    )
  }
}
