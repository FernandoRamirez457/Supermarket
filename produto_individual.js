import React, { useEffect} from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProdutoIndividual from './src/components/produtoIndividual';
import MenuQuantidadeProduto from './src/components/menu_quantidade_produto';

import produtos from './data/index';

export default function ProductUnitApp({ route }) {
    const { idCategoria, idProduto } = route.params;
    const navigation = useNavigation();

    let produto;

    produtos.forEach(product => {
        if (product.categoria_id === idCategoria) {
            product.produtos.forEach(p => {
                if (p.id === idProduto) {
                    produto = p;
                }
            });
        }
    });

    useEffect(() => {
        navigation.setOptions({ title: produto.nome });
    }, [produto.nome, navigation]);

    return (
        <View style={styles.container}>
            <ProdutoIndividual
                preco={produto.preco}
                nome={produto.nome}
                descricao={produto.descricao}
                imagemUrl={produto.imagemUrl}
            />

            <MenuQuantidadeProduto/>

            <Pressable style={styles.btn_comprar}>
                <Text style={styles.text_btn}>Adicionar ao Carrinho</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },

    btn_comprar: {
        width: '99%',
        height: 40,
        backgroundColor: '#1EB1FF',
        borderRadius: 12,
        marginTop: 10,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_btn: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    }
});

