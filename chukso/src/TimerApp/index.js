import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, TouchableOpacity , Alert} from 'react-native'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators  as actions} from '../Actions';

import ApnaButton from './ReusableComponents/button';

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes*60;
    let seconds = parseInt(time%60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes }:${
        seconds < 10 ? `0${seconds}` : seconds }`;
}

 class Timer extends Component {

    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if(!currentProps.isPlaying  && nextProps.isPlaying){
            // start the interval 
            const timeInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({timeInterval });
        }else if ( currentProps.isPlaying && !nextProps.isPlaying){
            //stop the interval 
            clearInterval(this.state.timeInterval);
        }
    }

  render() {
      const {
          isPlaying,
          elapsedTime,
          timerDuration,
        } = this.props.state.timerReducer;
      const { 
        startTimer,
        restartTimer
      } = this.props;
    return (
      <View style={styles.container}>
        <Text> Index of time </Text>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.upper}>
            <Text style={styles.time} > 
                {formatTime(timerDuration - elapsedTime)}
            </Text>
        </View>
        <View style={styles.lower}>
            { !isPlaying && (
                <ApnaButton buttonText="START" onPress={this.props.startTimer} />
            )}
            { isPlaying && (
                <ApnaButton buttonText="STOP" onPress={restartTimer} />
            )}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center'
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    lower:{
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center' 
    },
    time:{
        color:'#fff',
        fontSize:120,
        fontWeight:'100'
    }
});

function mapStateToProps(state){
    const { isPlaying, timerDuration, elapsedTime }  = state.timerReducer;
    return {
        isPlaying,
        timerDuration,
        elapsedTime, 
        state
    };
}

function mapDispatchToProps (dispatch){
    return bindActionCreators(actions,dispatch); 
}

export default connect(mapStateToProps,mapDispatchToProps)(Timer);