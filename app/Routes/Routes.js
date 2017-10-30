import React, { Component } from 'react';
import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../Pages/Home';

const scenes = Actions.create(
  <Scene key="root" duration={0}>
    <Scene key="home" component={Home} hideNavBar />
  </Scene>
);

class Routes extends Component {
  reducerCreate(params) {
    const defaultReducer = Reducer(params);
    return (state, action) => {
      this.props.dispatch(action);
      return defaultReducer(state, action);
    };
  }

  render () {
    return (
      <Router createReducer={this.reducerCreate.bind(this)} scenes={scenes} />
    );
  }
}

Routes.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Routes);
