import React from 'react';
import { connect } from 'react-redux';

import { setSearchFilterValue } from '../actions/actionCreators';

const SearchFilter = props => (
  <div>
    <input 
      onChange={props.onSearchInputChange} 
      type="text" 
      value={props.searchInput}
      placeholder="search" 
    />
  </div>
);

const mapStateToProps = state => ({
  searchInput: state.searchFilterReducer
});

const mapDispatchToProps = dispatch => ({
  onSearchInputChange(event) {
    dispatch(setSearchFilterValue(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);