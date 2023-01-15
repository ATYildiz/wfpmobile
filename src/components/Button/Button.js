import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';

import styles from './Button.style';
const Button = ({text, onPress, style = 'primary', loading}) => {
  return (
    <TouchableOpacity
      style={styles[style].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles[style].button_container}>
          <Text style={styles[style].title}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default Button;
