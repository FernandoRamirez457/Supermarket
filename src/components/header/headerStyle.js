import { StyleSheet } from 'react-native';

const stylesHeader = StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
    padding: 15,
    paddingTop: 25,
    backgroundColor: '#1EB1FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10
  },
  logotipo: {
    height: 50,
    width: 200,
  },
  container_icons_functions:{
    width: 90,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header_mobile: {
    paddingTop: 30
  }
})

export default stylesHeader;