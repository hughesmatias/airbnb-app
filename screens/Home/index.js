import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

import styles from "./styles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require("../../assets/images/walpaper.jpg")}
        style={styles.image}
      >
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('Saved')}
        >
          <Entypo name="location-pin" size={25} color="#267" />
          <Text style={styles.searchButtonText}>Where are you going?</Text>
        </Pressable>
        <View style={styles.container}>
          <Text style={styles.title}>Go Near</Text>
          <Pressable style={styles.button} onPress={() => console.log("hola")}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
