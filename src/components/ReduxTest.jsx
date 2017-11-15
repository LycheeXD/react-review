import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';

import { setInputValue } from '../actions/actionCreators';

const ReduxTest = (props) => (
  <div className="landing">
    <h1>{props.reduxTestReducer}</h1>
    <input onChange={props.onInputChange} type="text" value={props.reduxTestReducer} placeholder="redux" />
  </div>
);

const mapStateToProps = state => ({
  reduxTestReducer: state.reduxTestReducer
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
