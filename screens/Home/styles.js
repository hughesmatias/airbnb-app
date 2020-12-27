import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    color: 'white',
    fontWeight: 'bold',
    width: '70%',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '50%',
    height: 40,
    fontSize: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
  },
  container: {
    marginLeft: 25,
  },
  searchButton: {
    width: Dimensions.get('screen').width - 20,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
 
    position: 'absolute',
    zIndex: 100,
    top: 50,
    left: 0,
  },
  searchButtonText: {
    color: 'black',
  }
});

export default styles;
