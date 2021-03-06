import React, { Component } from 'react'
import './TruncatedTextBox.css'

class TruncatedTextBox extends Component {
  state = {
    truncated: true
  }

  showMore = () => {
    this.setState({ truncated: false })
  }

  showLess = () => {
    this.setState({ truncated: true })
  }

  render () {
    const words = this.props.text.split(' ')
    // if there is no need to truncate return as is
    if (words.length <= this.props.truncatedCharacters) {
      return (
        <div className='truncatedTextBox'>
          this.props.text
        </div>
      )
    }

    let displayText = ''
    let actionDiv

    if (this.state.truncated) {
      for (let i = 0; i < this.props.truncatedCharacters; i++) {
        displayText += words[i] + ' '
      }
      displayText += '...'
      actionDiv = (
        <div className='actionDiv' onClick={this.showMore}>Show More &or;</div>
      )
    } else {
      displayText = this.props.text
      actionDiv = (
        <div className='actionDiv' onClick={this.showLess}>Show Less &and;</div>
      )
    }

    return (
      <div className='truncatedTextBox'>
        <div className='text'>
          { displayText }
        </div>
        { actionDiv }
      </div>
    )
  }
}

export default TruncatedTextBox
