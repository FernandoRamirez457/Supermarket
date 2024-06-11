import React, {useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './style'

const MenuQuantidadeProduto = () => {
    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };


    return (
        <>
            <View style={styles.quantidadeContainer}>
                <Text style={styles.title_quantidade}>Quantidade de Produto:</Text>
                <Pressable style={styles.botao} onPress={diminuirQuantidade}>
                    <Text style={styles.botaoTexto}>-</Text>
                </Pressable>
                <Text style={styles.quantidadeTexto}>{quantidade}</Text>
                <Pressable style={styles.botao} onPress={aumentarQuantidade}>
                    <Text style={styles.botaoTexto}>+</Text>
                </Pressable>
            </View>
        </>
    );
};

export default MenuQuantidadeProduto;
