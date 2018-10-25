import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

import { Router } from 'react-native-router-flux';

import { Provider }   from 'react-redux';

import scenes from '../Routes/scenes'



 class AppContainer extends Component {
  render() {
    return (
     <Provider store={this.props.store}>
        <Router scenes = { scenes } />
     </Provider>
    )
  }
}
AppContainer.propTypes = {
    store: PropTypes.object.isRequired
}; 

export default AppContainer;