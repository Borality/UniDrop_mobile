import * as React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {styles} from "./TabTwoScreen.styles";
import { AntDesign } from '@expo/vector-icons';

export default function TabTwoScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniDrop</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="Receiving files" path2="The UniDrop way" path3="Receive now"/>
      <TouchableOpacity key={1} onPress={() => navigation.goBack()}>
						<AntDesign name="back" size={50} />
					</TouchableOpacity>
    </View>
  );
}

