import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {styles} from "./StartScreen.styles";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';



export default function StartScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StartScreen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="Join" path2="The UniDrop way" path3="Go"/>
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('RoomID')}>
        <Text style={styles.button} > Next page </Text>
      </TouchableOpacity>
    </View>
  );
}

