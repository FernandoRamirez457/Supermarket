import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container_category: {
        width: '100%',
        height: 140,
        marginTop: 10,
        marginHorizontal: 'auto',
        justifyContent: 'space-between'
    },

    title_category: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,

    },

    base_category: {
        width: '100%',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    category: {
        width: 80,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    image_category: {
        width: 78,
        height: 78,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#0E3D54',
    },


});

export default styles;