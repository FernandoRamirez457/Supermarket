import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Catalogo from './Catalogo';
import ProductUnitApp from './produto_individual';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Catalogo" component={Catalogo} options={{ headerShown: false }}/>
        <Stack.Screen name="ProdutoIndividual" component={ProductUnitApp} options={{ title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;