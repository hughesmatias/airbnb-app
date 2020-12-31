import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 15,
    borderWidth: 1,
    width: 30,
    height: 30,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
