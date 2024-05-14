import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
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
                    style={styles.flatList}
                    data={produtosCategoria.produtos}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Card
                            idCategoria={produtosCategoria.categoria_id}
                            id={item.id}
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
        width: '100%',
        height: '100%',
    },

});
