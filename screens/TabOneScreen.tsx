
import { StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function TabOneScreen() {
  return (
    <WebView
        source={{ uri: 'https://www.ahazones.com/' }}
        style={{ marginTop: 20 }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
