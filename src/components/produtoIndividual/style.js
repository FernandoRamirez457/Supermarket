import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 300,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    productContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    productPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0E3D54'
    },
    productDescription: {
        fontSize: 13,
        color: '#666',
        marginBottom: 20,
    },
});

export default styles;