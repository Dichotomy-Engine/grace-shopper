import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { createNewProduct } from '../store/addForm'
import { connect } from 'react-redux'

class productForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.typeOfInput}
          {...field.input}
        />
        {touched ? error : ''}
      </div>
    )
  }

  onSubmit(values) {
    this.props.createNewProduct(values)
  }

  render() {
    const { pristine, submitting, handleSubmit, reset } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h2>Add a New Product</h2>
        <Field
          label="Name of Product"
          typeOfInput="text"
          name="name"
          component={this.renderField}
        />
        <Field label="Price" name="price" component={this.renderField} />
        <Field
          label="Description of Product"
          typeOfInput="text"
          name="product"
          component={this.renderField}
        />
        <Field label="SKU" name="SKU" component={this.renderField} />
        <Field
          label="Units in Stock"
          typeOfInput="number"
          name="unitsInStock"
          component={this.renderField}
        />
        <Field
          label="Quantity Per Unit"
          typeOfInput="number"
          name="quantityPerUnit"
          component={this.renderField}
        />
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        {/* <Field
            label="Would you like this to be the featured product?"
            type="radio"
            name="featuredProduct"
            component={this.renderField}
          />
          <Field
            label="Would you like this product to be labeled as active?"
            type="radio"
            name="activeStatus"
            component={this.renderField}
          />
*/}
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Please enter a product name.'
  }
  if (!values.price) {
    errors.price = 'Please enter the price of the product.'
  }
  if (!values.SKU) {
    errors.SKU = 'Please enter the product SKU.'
  }
  if (!values.unitsInStock) {
    errors.unitsInStock = 'Please enter the number of units currently in stock.'
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'newProductsForm'
})(connect(null, { createNewProduct })(productForm))
