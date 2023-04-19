import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './pages/Login/Login';
import Singup from './pages/SignUp/Singup';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Detail from './pages/Detail/Detail';

const Stack = createNativeStackNavigator();

function App() {
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SingupPage" component={Singup} />
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="ShopPage" component={Shop} />
        <Stack.Screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
