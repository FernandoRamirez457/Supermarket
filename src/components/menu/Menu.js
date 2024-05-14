import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './menuStyle';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerMenu}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <View style={styles.buttonMenu}>
          <Entypo name="home" size={27} color="white" />
          <Text style={styles.buttonText}>Home</Text>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Catalogo', { id: 1 })}>
        <View style={styles.buttonMenu}>
          <FontAwesome name="shopping-basket" size={27} color="white" />
          <Text style={styles.buttonText}>Catálogo</Text>
        </View>
      </Pressable>

      <View style={styles.buttonMenu}>
        <AntDesign name="profile" size={27} color="white" />
        <Text style={styles.buttonText}>Perfil</Text>
      </View>
    </View>
  );
};

export default Menu;
