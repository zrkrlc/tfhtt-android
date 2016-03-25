'use strict';

import React, {
    AppRegistry,
    BackAndroid,  
    Component,
    ListView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from 'react-native';

// Imports color scheme
var ColorClass = require('../../src/Color.js');
var Color = new ColorClass();

class PageMainMenu extends Component {
    navExit() {
        BackAndroid.exitApp();
    }
    
    navBack() {
        this.props.navigator.pop();
    }
    
    navPage(pageId: String) {
        this.props.navigator.push({
            id: pageId
        });
    }
        
    _generateInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows([
                'page-main-menu',
                'page-sample',
            ])
        };
    }

    _renderRow(rowData: string) {
        return (
            <TouchableHighlight onPress=
                {this.navPage.bind(this, rowData.toString())}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.textButton}>
                            {rowData}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
    constructor() {
        super();
        this.state = this._generateInitialState();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style=
                {{height: 40}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />

                <ListView
                pageSize={5}
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                />
                
                <TouchableHighlight onPress=
                {this.navPage.bind(this, 'page-sample')}>
                    <Text style={styles.textButton}>
                        Go to sample page
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress=
                {this.navExit.bind(this)}>
                    <Text style={styles.textExit}>
                        Exit application
                    </Text>
                </TouchableHighlight>
            </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
    },

    list: {
        padding: 20,
        justifyContent: 'space-around',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    
    textButton: {
        fontSize: 30,
        color: Color.color1,
    },

    textExit: {
        fontSize: 20,
        color: Color.color5,
        marginTop: 10,
    },
        
});

module.exports = PageMainMenu
//AppRegistry.registerComponent('main', () => PageMainMenu);
