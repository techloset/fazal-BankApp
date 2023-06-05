import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import SecondScreen from './src/screens/secondscreen/SecondScreen';
import ThirdScreen from './src/screens/third/ThirdScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
