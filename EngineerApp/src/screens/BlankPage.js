import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BlankPage() {
  return (
    <View style={styles.container}>
      <Text>HALOO INI BLANK PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
