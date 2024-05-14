import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerMenu: {
        height: 70,
        backgroundColor: '#1B82B5',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.1,
        elevation: 5,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonMenu: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        gap: 4
    },

    buttonText: {
        color: 'white'
    }
});

export default styles;
