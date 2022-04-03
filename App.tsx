import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import tabOneScreen from './screens/tabOneScreen/TabOneScreen';
import tabTwoScreen from './screens/tabTwoScreen/TabTwoScreen';
import page5 from './screens/page5/Page5';
import page6 from './screens/page6/Page6';
import page7 from './screens/page7/Page7';


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
        <Stack.Screen
          name="page5"
          component={page5}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="page6"
          component={page6}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="page7"
          component={page7}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}