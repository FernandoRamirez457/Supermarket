import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import stylesHeader from './headerStyle.js';

const HeaderSupermarket = () => {

  const navigation = useNavigation();


  return (
    <View style={[stylesHeader.header]}>
      <View style={[stylesHeader.container_icons_page]}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image style={[stylesHeader.logotipo]} source={{ uri: 'https://image.api.playstation.com/vulcan/ap/rnd/202404/1120/23cf1ef269fb02b6fff1a525d662bcc44e8bbb83b744459b.png' }}></Image>
        </Pressable>
      </View>

      <View style={[stylesHeader.container_icons_functions]}>
        <FontAwesome5 name="shopping-bag" size={28} color="white" />
        <MaterialCommunityIcons name="face-man-profile" size={29} color="white" />
      </View>
    </View>
  );
};

export default HeaderSupermarket;
