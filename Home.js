import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import HeaderSupermarket from './src/components/header/header';
import Menu from './src/components/menu/Menu';
import Category from './src/components/category/category';
import CardHome from './src/components/cardHome/cardHome';

import produtos from './data/index';

export default function Home() {
    return (
        <View style={styles.container}>
            <HeaderSupermarket />

            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.baseApp}>
                    <View style={styles.banner_promotion}>
                        <Image style={styles.banner} source={{ uri: 'https://staticdelivery.nexusmods.com/mods/6225/images/headers/183_1712920292.jpg' }} />
                    </View>

                    <Category />

                    <FlatList
                        contentContainerStyle={styles.flat}
                        horizontal={true}
                        data={produtos[1].produtos}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <CardHome
                                preco={item.preco}
                                nome={item.nome}
                                imagemUrl={item.imagemUrl}
                            />
                        )}
                    />
                </View>
            </ScrollView>

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
    flat: {
        padding: 10,
        gap: 10
    },
});
