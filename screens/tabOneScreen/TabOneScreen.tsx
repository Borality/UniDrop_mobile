import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {styles} from "./TabOneScreen.styles";
import {
  TouchableOpacity,
} from 'react-native';


export default function TabOneScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniDrop</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="Sharing files" path2="The UniDrop way" path3="Share now"/>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('tabTwoScreen')}>
        <Text style={styles.button} >Next page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page5')}>
        <Text style={styles.button} >Page 5</Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page6')}>
        <Text style={styles.button} >Page 6</Text>
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

