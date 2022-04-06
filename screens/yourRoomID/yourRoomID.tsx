import React from 'react';
import { View, Text, TextInput,Button } from "react-native";
import {styles} from "./yourRoomID.styles";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


export default function yourRoomID( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Here is your RoomID:</Text>
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page4')}>
        <Text style={styles.button} > Next Page </Text>
      </TouchableOpacity>
    </View>
  );
}

