import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {styles} from "./RoomID.styles";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';



export default function RoomID({ navigation: {navigation: any} }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RoomID</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="Enter Room ID" path2="The UniDrop way" path3="Go"/>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page 7')}>
        <Text style={styles.button} > Next Page </Text>
      </TouchableOpacity>
    </View>
  );
}

