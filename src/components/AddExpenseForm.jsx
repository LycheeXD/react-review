import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { addExpense } from '../actions/actionCreators';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      amount: ''
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onAddExpenseSubmit = this.onAddExpenseSubmit.bind(this);
  }

  onDescriptionChange(event) {
    event.persist();

    this.setState(() => ({
      description: event.target.value
    }));

    // OR
    // const description = event.target.value;

    // this.setState(() => ({
    //   description
    // }));
  }

  onAmountChange(event) {
    const amount = event.target.value;

    if(amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount
      }));
    }
  }

  onAddExpenseSubmit(event) {
    event.preventDefault();

    if(this.state.description && this.state.amount) {
      this.props.onAddExpenseSubmit({
        ...this.state,
        id: uuid()
      });

      this.setState(() => ({
          description: '',
          amount: ''
      }));
    }

  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <button onClick={this.onAddExpenseSubmit} type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddExpenseSubmit(inputExpense) {
    dispatch(addExpense(inputExpense));
  }
});

export default connect(null, mapDispatchToProps)(AddExpenseForm);