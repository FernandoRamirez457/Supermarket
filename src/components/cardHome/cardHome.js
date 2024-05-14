import React from 'react';
import { View, Text, Image} from 'react-native';

import styles from './cardHomeStyle';

const CardHome = (props) => {
  return (
    <>
      <View style={styles.product}>
        <Image style={styles.imageProduct} source={{ uri: props.imagemUrl}} />
        <Text style={styles.titleProduct}>{props.nome}</Text>
        <Text style={styles.priceProduct}>{props.preco}</Text>
      </View>
    </>
  );
};


export default CardHome;
