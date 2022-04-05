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


export default function TabTwoScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniDrop</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="Receiving files" path2="The UniDrop way" path3="Receive now"/>
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('StartScreen')}>
        <Text style={styles.button} >StartScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page7')}>
        <Text style={styles.button} >Page 7</Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page8')}>
        <Text style={styles.button} >Page 8</Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page9')}>
        <Text style={styles.button} >Page 9</Text>
      </TouchableOpacity>
    </View>
  );
}

