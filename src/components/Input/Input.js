import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './Input.style';
function Input({placeholder, value, onType, secure}) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onType}
          value={value}
          secureTextEntry={secure}
        />
      </View>
    </View>
  );
}

export default Input;
