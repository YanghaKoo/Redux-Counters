import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Button from '../components/Button';
import getRandomColor from '../lib/getRandomColor'

import {connect} from 'react-redux'
import * as actions from '../actions'


class App extends Component {
  render() {
    const {onCreate, onRemove} = this.props
    return (
      <div className="App">
        <Button onCreate={onCreate} onRemove={onRemove} />             
        <CounterListContainer/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCreate : () => {
    const color = getRandomColor()
    dispatch(actions.create(color))
  },
  onRemove : () => dispatch(actions.remove())   
})


export default connect(null,mapDispatchToProps)(App);