import React, { useState } from 'react';
import { View, Text, TextInput, Button} from "react-native";
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

export default function RoomID({ navigation }: { navigation: any }) {

  // const [IDnumber,setIDnumber] = useState<any | null>(null);
  // const initiate = () => {
  //   navigation.navigate("yourRoomID", {
  //     IDnumber: "test",
  //   });
  // };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RoomID</Text>
      <TextInput
      placeholder="Enter RoomID"
      />
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <Button title="next" onPress ={() => navigation.navigate("yourRoomID")}/>
    </View>
  );
}

