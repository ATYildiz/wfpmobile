import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, ImageBackground, FlatList} from 'react-native';
import axios from 'axios';

import BackGroundImage from '../../images/istockphoto-1030957090-170667a.jpg';
import styles from './Shop.style';
import ShopCard from '../../components/Card/ShopCard/ShopCard';

let shopsItemUrl = 'https://fakestoreapi.com/products';

const Shop = ({puan}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const {data: shopsData} = await axios.get(shopsItemUrl);
    setData(shopsData);
  };
  const renderShopItem = ({item}) => <ShopCard product={item} puan={puan} />;

  return (
    <SafeAreaView style={styles.SafeArea_container}>
      <ImageBackground
        source={BackGroundImage}
        resizeMode="cover"
        style={styles.image}>
        <FlatList data={data} renderItem={renderShopItem} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Shop;
