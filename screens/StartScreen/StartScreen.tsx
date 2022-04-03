import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';
import {styles} from "./StartScreen.styles";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';



export default function TabOneScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniDrop</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="Sharing files" path2="The UniDrop way" path3="Share now"/>
      <TouchableOpacity key = {1} onPress={() => navigation.navigate('tabTwoScreen')}>
        <Text style={styles.button} >Next page </Text>
      </TouchableOpacity>
    </View>
  );
}

