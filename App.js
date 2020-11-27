import 'react-native-gesture-handler';//Must add this import on first line
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen'
import PlaybackScreen from './src/screens/PlaybackScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Playback' component={PlaybackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
