import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardProduct: {
    width: '95%',
    height: 150,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderColor: '#1B3745',
    borderWidth: 1,
    borderRadius: 8,
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.45)',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  containerInfoProduct: {
    width: '65%',
    height: '100%',
  },

  imageProduct: {
    height: '100%',
    width: 100,
  },

  nameProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },

  descriptionProduct: {
    fontSize: 12,
    marginBottom: 10
  },

  priceProduct: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0E3D54'
  }
});

export default styles;