'use strict';

import React, {
    AppRegistry,
    BackAndroid,
    Component,
    Navigator,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
} from 'react-native';

// Declares variable used by Navigator class
var _navigator;

// Imports scenes
var PageSample = require('./app/scenes/page-sample/index.android.js');
var PageMainMenu = require('./app/scenes/page-main-menu/index.android.js');
var PageListView = require('./app/UIExplorer/ListViewGridLayoutExample.js');

// Defines boilerplate for back button
BackAndroid.addEventListener('hardwareBackPress', () => {
    console.warn(this.props._navigator);
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});


// Defines main class
class Main extends Component {
    // Initialises main-menu as first page
    render() {
        return (
            <Navigator style={styles.container}
            initialRoute={{id: 'page-main-menu'}}
            renderScene={this.navigatorRenderScene}/>
        );
        
    }

    navigatorRenderScene(route, navigator) {
        var _navigator = navigator;
        // Switches scene based on ID
        switch (route.id) {
        case 'page-sample':
            return (
                    <PageSample navigator={navigator} title="Sample Page"/>);
        case 'page-main-menu':
            return (
                    <PageMainMenu navigator={navigator} title="Main Menu"/>);
        case 'page-list-view':
            return (
                    <PageListView />
            );
        }
        
    }
}
            

// Defines stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },   
});

// Defines boilerplate for app to work
AppRegistry.registerComponent('tfhtt_android', () => Main);
