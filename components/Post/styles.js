import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 5,
    color: 'grey',
  },
  description: {
    marginBottom: 10,
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
  },
  oldPrice: {
    color: '#5b5b5b',
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  currentPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  }
});

export default styles;