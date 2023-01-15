import {StyleSheet} from 'react-native';
import Color from '../../../styles/colors';
export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Color.turkuaz,
    borderRadius: 8,
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    minHeight: 80,
    padding: 5,
    margin: 10,
    resizeMode: 'contain',
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});
