import React from 'react';
import { Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class App extends React.Component {
  state = {
    animation: null,
  };

  componentWillMount() {
    this._playAnimation();
  }

  render() {
    return (
      <TouchableOpacity onPress={this._playAnimation} style={{alignItems:'center'}}>
      <View style={styles.animationContainer}>
        {this.state.animation &&
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={styles.animationWrapper}
            source={this.state.animation}
            loop={false}
          />}
        
      </View>
      </TouchableOpacity>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    let result = require('../img/data.json');
      
    this.setState({ animation: result }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    width:300,
    height:114
  },
  buttonContainer: {
    paddingTop: 20,
  },
  animationWrapper: {
    width: '100%',
    height: '100%',
  },
});