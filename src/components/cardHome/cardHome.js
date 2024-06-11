import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './cardHomeStyle';

const CardHome = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <Pressable onPress={() => navigation.navigate('ProdutoIndividual', { idProduto: props.idProduto, idCategoria: props.idCategoria})}>
        <View style={styles.product}>
          <Image style={styles.imageProduct} source={{ uri: props.imagemUrl }} />
          <Text style={styles.titleProduct}>{props.nome}</Text>
          <Text style={styles.priceProduct}>{props.preco}</Text>
        </View>
      </Pressable>
    </>
  );
};


export default CardHome;
