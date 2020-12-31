import React, { useState } from 'react';
import { Text, FlatList, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


import Entypo from 'react-native-vector-icons/Entypo';

import searchResults from '../../assets/data/search';

const DestinationSearch = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate('Airbnb')}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  )
};

export default DestinationSearch;
