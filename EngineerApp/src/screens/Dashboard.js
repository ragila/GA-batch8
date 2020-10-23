import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from '../component/Slider'
import Jokes from '../component/JokesComponent'
import Weather from '../component/Weather.component'

export default class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
  }

  render() {
    const navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Slider/>
          <Jokes/>
          <Weather/>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Other')}
            style={styles.btn}>
            <Text>YUKK KE OTHER PAGE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  btn: {
    width: 200, height: 50, backgroundColor: 'grey', borderRadius: 15, justifyContent: 'center', alignItems: 'center'
  }
});
