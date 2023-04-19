import React from 'react';
import {View, Text, Image, Alert} from 'react-native';

import Button from '../../Button/Button';
import styles from './ShopCard.style';
const ShopCard = ({product, puan}) => {
  let Price = Math.ceil(product.price * 130);
  function HandleDetail() {
    
  }
  function HandleBuy() {
    if (Price > puan) {
      Alert.alert('Bilgi', 'Puanınız Yetersiz', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      Alert.alert(
        'Bilgi',
        Price +
          " Puan'a Bu Ürünü Almayı Onaylıyor Musunuz? (Mevcut Puanınız: " +
          puan +
          ')',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => (puan -= Price)},
        ],
      );
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Button
          text={"Satın Al."}
          style={'third'}
          onPress={HandleDetail}
        />
      </View>
    </View>
  );
};

export default ShopCard;
