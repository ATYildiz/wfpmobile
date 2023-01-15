import React from 'react';
import {SafeAreaView, Text, View, ImageBackground} from 'react-native';

import Button from '../../components/Button';
import BackGroundImage from '../../images/istockphoto-1030957090-170667a.jpg';
import styles from './Home.style';
import Shop from '../Shop/Shop';

let puan = 0;

const Home = ({navigation}) => {
  function HandleShop() {
    <Shop puan={puan} />;
    navigation.navigate('ShopPage');
  }
  function WatchShortAdverb() {
    console.log('WatchShortAdverb');
    puan += 500;
  }
  function WatchLongAdverb() {
    console.log('WatchLongAdverb');
    puan += 1000;
  }
  return (
    <SafeAreaView style={styles.SafeArea_container}>
      <ImageBackground
        source={BackGroundImage}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.View_container}>
          <Text style={styles.Text}>
            Kısa Reklam İzlemek için Lütfen Tıklayınız.
          </Text>
          <Button
            style={'secondary'}
            text="Kısa Reklam İzle (500 Puan)"
            onPress={WatchShortAdverb}
          />
        </View>
        <View style={styles.View_container}>
          <Text style={styles.Text}>
            Uzun Reklam İzlemek için Lütfen Tıklayınız.
          </Text>
          <Button
            style={'secondary'}
            text="Uzun Reklam İzle (1000 Puan)"
            onPress={WatchLongAdverb}
          />
        </View>
        <Button text="Market" onPress={HandleShop} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
