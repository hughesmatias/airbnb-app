import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Home from './screens/Home';
import DestinationSearch from './screens/DestinationSearch';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        {/* <Home /> */}
        <DestinationSearch />
      </SafeAreaView>
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
