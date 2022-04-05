import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Button} from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path, path2, path3 }: { path: string, path2: string, path3: string }) {
  return (
    <View style ={styles.generalBackground}>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          {path}
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText style = {styles.textProp}>{path2}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Cross-platform capable
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: '#5D8AA8',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#5D8AA8',
  },
  helpLink: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    radiusBordered: true,
    borderRadius: 30,
  },
  helpLinkText: {
    textAlign: 'center',
    fontSize: 20,
  },
  generalBackground: {
    backgroundColor: '#5D8AA8',
  },
  textProp: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
