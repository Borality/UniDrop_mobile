import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import tabOneScreen from './screens/tabOneScreen/TabOneScreen';
import tabTwoScreen from './screens/tabTwoScreen/TabTwoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tabOneScreen"
          component={tabOneScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tabTwoScreen"
          component={tabTwoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}