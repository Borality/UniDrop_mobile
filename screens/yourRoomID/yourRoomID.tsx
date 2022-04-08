import React from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TextInput,Button } from "react-native";
import {styles} from "./yourRoomID.styles";
import RoomID from "../RoomID/RoomID";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


export default function YourRoomID({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50}}> Your RoomID # is:</Text>
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page4')}>
        <Text style={styles.button} > Next Page </Text>
      </TouchableOpacity>
    </View>
  );
  
}

