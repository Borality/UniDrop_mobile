import React, { Component} from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { View, Text, TextInput, Button } from "react-native";
import { RootTabScreenProps } from '../../types';
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RoomID</Text>
      <Text style={styles.title}>Enter RoomID:</Text>
				<TextInput
					style={styles.textInput}
					numberOfLines={1}
				></TextInput>
      <TouchableOpacity key = {2} onPress={() => navigation.goBack()}>
        <Text style={styles.button} >Last page </Text>
      </TouchableOpacity>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('yourRoomID',)}>
        <Text style={styles.button} > Next Page </Text>
      </TouchableOpacity>
    </View>
  );
}

