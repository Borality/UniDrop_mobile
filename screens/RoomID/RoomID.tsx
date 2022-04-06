import React from 'react';
import { View, Text, TextInput, Button } from "react-native";
import {styles} from "./RoomID.styles";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';



export default function RoomID( {navigation}: {navigation: any} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RoomID</Text>
      <Text style={styles.title}>Enter text to send:</Text>
				<TextInput
					style={styles.textInput}
					multiline
					numberOfLines={4}
				></TextInput>
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('page 7')}>
        <Text style={styles.button} > Next Page </Text>
      </TouchableOpacity>
    </View>
  );
}

