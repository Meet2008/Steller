import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftsScreen from "./screens/SpaceCrafts";
import StarMapScreen from "./screens/StarMap";

const stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
        <Stack.Navigator
          initialRouteName='DailyPic' screenOptions={{headerShown:false}}>
               <StackScreen name='DailyPic' component={DailyPicScreen}/>
               <StackScreen name='SpaceCrafts' component={SpaceCraftsScreen}/>
               <StackScreen name='StarMap' component={StarMapScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
