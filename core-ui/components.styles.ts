import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import {colors} from "./colors"

export const stylesMain = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
    },
    mainContainer: {
      width: (Platform.OS === 'web') ? "20%": "60%",
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      backgroundColor: colors.secondary,
      borderRadius: 5,
      marginTop: 5,
    },
  });