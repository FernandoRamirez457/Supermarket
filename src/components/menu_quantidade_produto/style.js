import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    quantidadeContainer: {
        width: '99%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
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
    title_quantidade: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    botao: {
        width: 35,
        height: 35,
        borderWidth: 2,
        borderColor: '#1B82B5',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoTexto: {
        color: '#1B82B5',
        fontSize: 19,
        fontWeight: 'bold',
    },
    quantidadeTexto: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#1B82B5',
        borderRadius: 5,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 7
    },
});

export default styles;
