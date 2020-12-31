import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Guests = () => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [childrem, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View style={{
      height: '100%',
      justifyContent: 'space-between',
    }}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Adults</Text>
            <Text style={{ color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults-1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults+1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Children</Text>
            <Text style={{ color: '#8d8d8d'}}>Ages 2 - 12</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(0, childrem-1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{childrem}</Text>
            <Pressable
              onPress={() => setChildren(childrem+1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Infants</Text>
            <Text style={{ color: '#8d8d8d'}}>Under 2</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants-1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants+1)}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>


      <Pressable style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }} onPress={() => navigation.navigate('SearchResult')}>
          <Text style={{
            fontSize: 20,
            color: 'white',
          }}>Search</Text>
        </Pressable>
    </View>
  )
}

export default Guests;
