import {StyleSheet} from 'react-native';

import color from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 15,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: color.turkuaz,
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderColor: color.turkuaz,
      borderWidth: 1,
    },
    title: {
      ...base_style.title,
      color: color.turkuaz,
    },
  }),
  third: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderRadius: 8,
      padding: 5,
      margin: 10,
      marginLeft: 150,
      backgroundColor: 'white',
      borderColor: color.turkuaz,
      borderWidth: 1,
    },
    title: {
      ...base_style.title,
      fontWeight: 'italic',
      fontSize: 12,
      color: color.turkuaz,
      textAlign: 'center',
    },
  }),
};
