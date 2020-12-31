import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import Router from './navigation/Router';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Router />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
