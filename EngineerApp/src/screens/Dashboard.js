import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '../component/Slider'

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Slider/>
      <Text>JOKES</Text>
      <Text>WEATHER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
