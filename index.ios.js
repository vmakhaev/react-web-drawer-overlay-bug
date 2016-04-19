/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  DrawerLayoutAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

class rn023 extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        ref='drawer'
        drawerWidth={300}
        drawerPosition='left'
        renderNavigationView={() => <View style={styles.menu}><Text>Menu</Text></View>}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <TouchableOpacity onPress={this.onPress}>
            <Text>Press me!</Text>
          </TouchableOpacity>
        </View>
      </DrawerLayoutAndroid>
    );
  }

  onPress () {
    console.log('pressed')
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
  menu: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

AppRegistry.registerComponent('rn023', () => rn023);

if (Platform.OS == 'web') {
  let app = document.createElement('div');
  document.body.appendChild(app);
  AppRegistry.runApplication('rn023', {
    rootTag: app
  })
}
