import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, TextInput } from "react-native";
import { Input, Button} from "react-native-elements";
import {styles} from "./RoomID.styles";
import yourRoomID from "../yourRoomID/yourRoomID";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

export default function RoomID() {

  const [name,setName] = useState("");
  const navigation = useNavigation();
  const initiate = () => {
    navigation.navigate("yourRoomID", {
      name: name,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RoomID</Text>
      <Input
      placeholder="Enter RoomID"
      value={name}
      onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <Button title="initiate" onPress ={initiate}/>
    </View>
  );
}

