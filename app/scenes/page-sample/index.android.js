/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

class PageSample extends Component {
    navPageMainMenu() {
        this.props.navigator.push({
            id: 'main-menu'
        });
    }

    navBack() {
        this.props.navigator.pop();
    }
    
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                Shake or press menu button for dev menu
                </Text>
                
                <TouchableHighlight onPress=
                {this.navBack.bind(this)}>
                <Text style={[styles.instructions, {color: 'green',}]}>
                    To go back, tap here.
                    </Text>
                </TouchableHighlight>
                
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = PageSample;
//AppRegistry.registerComponent('main', () => PageSample);
