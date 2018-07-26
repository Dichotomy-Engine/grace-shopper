import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {createNewReview} from '../store'

class ReviewForm extends Component {

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
      const {subject, content, rating} = values
      this.props.createNewReview({
          id: this.props.match.params.productId,
          subject,
          content,
          rating
      })
  }

  goBack = () => {
      this.props.history.goBack()
  }

  render() {
      const {pristine, submitting, handleSubmit, reset} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Subject"
          typeOfInput="text"
          name="subject"
          component={this.renderField}
        />
        <Field
          typeOfInput="text"
          label="Content"
          name="content"
          component={this.renderField}
        />
        <Field
          typeOfInput="number"
          label="Rating"
          name="rating"
          component={this.renderField}
        />
        <button
          type="submit"
          disabled={pristine || submitting}
          onClick={this.goBack}
        >
          Submit
        </button>
        <button type="button" disabled={pristine ||           submitting} onClick={reset}>
          Clear Values
        </button>
        <br/>
      </form>
    )
  }
}

const validate = values => {
    const errors = {}
  
    if (!values.subject) {
      errors.name = 'Please enter a subject.'
    }
    if (!values.content) {
      errors.price = 'Please enter your content.'
    }
    if (!values.rating) {
      errors.rating = 'Please enter a value between 1 and 5'
    }
    return errors
  }

export default reduxForm({
    validate,
    form: 'newReviewForm'
})(connect(null, { createNewReview })(ReviewForm))
