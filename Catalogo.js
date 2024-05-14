import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import HeaderSupermarket from './src/components/header/header';
import Menu from './src/components/menu/Menu';
import Category from './src/components/category/category';
import Card from './src/components/cardProdutos/card';

import produtos from './data/index';


export default function Catalogo({ route }) {
    const { id } = route.params;

    let produtosCategoria;

    produtos.forEach(product => {
        if (product.categoria_id === id) {
            produtosCategoria = product;
        }
    });

    return (
        <View style={styles.container}>
            <HeaderSupermarket />
                <View style={styles.baseApp}>

                    <Category />

                    <FlatList
                        style={{flex: 1}}
                        data={produtosCategoria.produtos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <Card
                                preco={item.preco}
                                nome={item.nome}
                                descricao={item.descricao}
                                imagemUrl={item.imagemUrl}
                            />
                        )}
                    />
                </View>

            <Menu />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    baseApp: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    banner_promotion: {
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 'auto',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    banner: {
        width: '96%',
        height: 100,
        borderRadius: 10,
    },
});
