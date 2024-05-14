import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './categoryStyle';

const Category = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container_category}>
            <Text style={styles.title_category}>Aqui tem Tuuuudo!!!</Text>

            <View style={styles.base_category}>
                <Pressable onPress={() => navigation.navigate('Catalogo', { id: 1 })}>
                    <View style={styles.category}>
                        <Image style={styles.image_category} source={{ uri: 'https://mercadoeconsumo.com.br/wp-content/uploads/2018/10/O-caminho-sem-volta-do-crescimento-das-marcas-pr%C3%B3prias-no-varejo.jpg' }}></Image>
                        <Text style={{ fontWeight: 'bold' }}>Varejos</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Catalogo', { id: 2 })}>
                    <View style={styles.category}>
                        <Image style={styles.image_category} source={{ uri: 'https://nutritotal.com.br/publico-geral/wp-content/uploads/2023/12/laticinios-integrais.png' }}></Image>
                        <Text style={{ fontWeight: 'bold' }}>Laticinios</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Catalogo', { id: 3 })}>
                    <View style={styles.category}>
                        <Image style={styles.image_category} source={{ uri: 'https://images-americanas.b2w.io/produtos/3097524985/imagens/cesta-basica-de-alimentos-completa-17-itens/3097524993_1_xlarge.jpg' }}></Image>
                        <Text style={{ fontWeight: 'bold' }}>Não Perec.</Text>
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Catalogo', { id: 4 })}>
                    <View style={styles.category}>
                        <Image style={styles.image_category} source={{ uri: 'https://static.wixstatic.com/media/873176_59d6b3936b704ec4a47c1df9e145f04b~mv2.png/v1/fill/w_640,h_566,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/873176_59d6b3936b704ec4a47c1df9e145f04b~mv2.png' }}></Image>
                        <Text style={{ fontWeight: 'bold' }}>Alcoólicos</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};


export default Category;
