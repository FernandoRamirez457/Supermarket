import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    product: {
        width: 155,
        height: 'auto',
        backgroundColor: 'white',
        padding: 10,
        borderColor: '#1B3745',
        borderWidth: 1,
        borderRadius: 8,
        boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.45)',
        elevation: 5,
        marginTop: 20
    },

    imageProduct: {
        width: '100%',
        height: 175,
        marginBottom: 7,
        backgroundColor: 'white',
        aspectRatio: 3 / 4,
    },

    titleProduct: {
        fontSize: 15,
    },

    priceProduct: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0E3D54'
    },
});

export default styles;
