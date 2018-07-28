const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
    orderNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: true
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true
    }
  },
  {
    hooks: {
      // beforeCreate: (order, options) => {
      //   order.phoneNumber = order.phoneNumber.replace(/[^0-9]/g, '')
      // }
    }
  }
)

Order.prototype.generateOrderNumber = () => {
  let orderNumber = '#'
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < 9; i++)
    orderNumber += possible.charAt(Math.floor(Math.random() * possible.length));

  return orderNumber;
}

module.exports = Order
