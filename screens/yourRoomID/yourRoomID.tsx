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


export default function yourRoomID() {
    const route = useRoute();
  return (
    <View>
      <Text style={styles.title}>Here is your RoomID:</Text>
      <Text style={{ fontSize: 20}}> Name: {route.params.name}</Text>
    </View>
  );
  
}

