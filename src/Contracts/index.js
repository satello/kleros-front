import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { balanceFetchData } from '../business/ethereum/action-creators'
import Form from './Form'
import './Contracts.css'

class Contracts extends Component {
  componentDidMount () {
    this.props.getBalance()
  }

  render () {
    if (this.props.balance.hasErrored) {
      return <p>Sorry! There was an error loading the balance</p>
    }

    if (this.props.balance.isFetching) {
      return <p>Loading…</p>
    }

    return (
      <div className='Contracts-content'>
        <div className='content'>
          <h1>Contracts</h1>
          <Form />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance.balance,
    hasErrored: state.balance.failureBalance,
    isFetching: state.balance.requestBalance
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBalance: url => dispatch(balanceFetchData())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contracts))
