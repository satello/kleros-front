import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { balanceFetchData } from '../business/ethereum/action-creators'
import GridContent from './Grid/GridContent'
import Grid from './Grid'
import SearchBar from '../SearchBar'
import './Disputes.css'

class Disputes extends Component {
  state = {
    address: 0x0
  }

  componentWillMount () {
    this.props.getBalance()
  }

  render () {
    const itemsTitle = [
      'Project',
      'Deadline',
      'Case ID',
      'Status',
      'Evidence'
    ]

    return (
      <div className='Disputes-container'>
        <SearchBar />
        <div className='content'>
          <h1>Open Disputes</h1>
          <Grid itemTitles={itemsTitle}>
            <GridContent />
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBalance: url => dispatch(balanceFetchData())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Disputes))
