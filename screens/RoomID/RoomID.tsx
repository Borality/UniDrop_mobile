import { useRoute } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from "react-native";
import { Input } from "react-native-elements";
import {styles} from "./RoomID.styles";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

export default function RoomID( {navigation}: {navigation: any} ) {

  const [IDnumber,setNumber] = useState("");
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RoomID</Text>
      <Text style={styles.title}>Enter RoomID:</Text>
      <Input
      placeholder="Enter RoomID"
      value={IDnumber}
      onChangeText={(text) => setNumber(text)}
      />
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('yourRoomID',{ paramKey: 'Some Param from previous Screen',})}>
        <Text style={styles.button} > Next Page </Text>
      </TouchableOpacity>
    </View>
  );
}

