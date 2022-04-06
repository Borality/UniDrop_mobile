import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {styles} from "./TabTwoScreen.styles";
import { AntDesign } from '@expo/vector-icons';

export default function TabTwoScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniDrop</Text>
      <TouchableOpacity key={1} onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
    </View>
  );
}

