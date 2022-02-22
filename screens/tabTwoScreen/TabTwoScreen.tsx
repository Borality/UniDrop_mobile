import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import {styles} from "./TabTwoScreen.styles";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniDrop</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="Receiving files" path2="The UniDrop way" path3="Receive now"/>
    </View>
  );
}

