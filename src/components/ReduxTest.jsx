import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

import { setInputValue } from '../actions/actionCreators';

// can probably use object destructuring here too
const ReduxTest = props => (
  <div className="landing">
    <h2>{props.reduxTestReducer}</h2>
    <h2>{props.expensesReducer.length}</h2>
    <h2>{props.sortReducer}</h2>
    <input 
      onChange={props.onInputChange} 
      type="text" 
      value={props.reduxTestReducer} 
      placeholder="redux" 
    />
  </div>
);

// object destructuring might be useful here
const mapStateToProps = ({reduxTestReducer, expensesReducer, sortReducer}) => ({
  reduxTestReducer,
  expensesReducer,
  sortReducer
});

const mapDispatchToProps = dispatch => ({
  onInputChange(event) {
    dispatch(setInputValue(event.target.value));
  }
});

ReduxTest.propTypes = {
  reduxTestReducer: string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);
