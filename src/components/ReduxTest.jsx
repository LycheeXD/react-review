import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

import { setInputValue } from '../actions/actionCreators';

const ReduxTest = (props) => (
  <div className="landing">
    <h1>{props.reduxTestReducer}</h1>
    <h2>{props.expensesReducer.length}</h2>
    <h2>{props.filtersReducer.sortBy}</h2>
    <input onChange={props.onInputChange} type="text" value={props.reduxTestReducer} placeholder="redux" />
  </div>
);

const mapStateToProps = state => ({
  reduxTestReducer: state.reduxTestReducer,
  expensesReducer: state.expensesReducer,
  filtersReducer: state.filtersReducer
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
