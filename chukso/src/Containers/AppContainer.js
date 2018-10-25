import React, {Component, ReactPropTypes } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import HomeScreen from '../Routes/HomeScreen';
import HomeContainer from '../Routes/Home/containers/HomeContainer';

export default class AppContainer extends Component {

    static propTypes = {
        store: PropTypes.object.isRequired
    };


    render(){
        return(
            <Provider store={this.props.store} >
                <Router>
                    <Stack key="root">
                        <Scene key="home" title="Home" component={HomeContainer} initial={true} />
                        <Scene key="home2" title="Home2" component={Screen2}  /> 
                    </Stack>
                </Router>
            </Provider>
        )
    }
}

class Screen1 extends Component {
    render() {
      return (
          <View>
              <Text>hl</Text>
          </View>
      );
    }
}
class Screen2 extends Component {
    render() {
      return (
          <View>
              <Text>hl</Text>
          </View>
      );
    }
}