import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';

const Post = ({
  image,
  bed,
  bedroom,
  oldPrice,
  newPrice,
  totalPrice,
  type,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri : image }}
        style={styles.image}
      />
      <Text style={styles.bedroom}>{bed} bed {bedroom} bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>{type}. {title}</Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.currentPrice}>${newPrice}</Text>
        / night
      </Text>
      <Text style={styles.totalPrice}>${totalPrice} total</Text>
    </View>
  )
}

export default Post;
