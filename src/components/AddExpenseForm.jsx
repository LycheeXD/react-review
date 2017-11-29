import React, { Component } from 'react';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      amount: ''
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onHandleFormSubmit = this.onHandleFormSubmit.bind(this);
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
    event.persist();

    this.setState(() => ({
      amount: event.target.value
    }));
  }

  onHandleFormSubmit() {

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
        </form>
      </div>
    );
  }
}

export default AddExpenseForm;