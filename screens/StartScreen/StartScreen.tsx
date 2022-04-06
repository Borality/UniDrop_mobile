import * as React from 'react';
import {styles} from "./StartScreen.styles";
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';



export default function StartScreen( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StartScreen</Text>
      <View style={styles.separator} />
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('RoomID')}>
        <Text style={styles.button} > Start Room </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('RoomID')}>
        <Text style={styles.button} > Join Room </Text>
      </TouchableOpacity>
    </View>
  );
}

