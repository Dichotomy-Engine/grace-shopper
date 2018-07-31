import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchOrderHistory}  from '../store'

class OrderHistory extends Component {

  componentDidMount() {
    this.props.fetchOrderHistory(this.props.match.params.userId)
  }

  render() {
    const orderHistory = this.props.items
    console.log('orderHistory', orderHistory)
    console.log('orderHistory.length', orderHistory.length)
    console.log('typeof orderHistory', typeof orderHistory)
    return (
      <div>
        <h1 className='title'>Order History</h1>
          {orderHistory.length > 1 && orderHistory.map(order => (
                    <div key={order.id}>
                    {console.log('order', order)} 
                        <h1>Created at: {order[0].createdAt}</h1>
                         <h1>Order status: {order[0].orderStatusCode.description}</h1>
                         <h1>Order id: {order[0].id}</h1>
                        <br/>
                    </div>
          ))}
          {orderHistory.length <= 1 && <h1>You have no order history! How do you expect to reach a state of inebriation?</h1>}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    items: state.orders.items,
    userId: state.me.id
  }
}

const mapDispatch = dispatch => ({
    fetchOrderHistory: userId => dispatch(fetchOrderHistory(userId))
})

export default connect(mapState, mapDispatch)(OrderHistory)