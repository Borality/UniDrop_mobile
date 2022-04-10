import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5D8AA8',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: "#0782F9",
      borderRadius: 10,
      marginTop: 5,
    },
    inputContainer: {
        width: (Platform.OS === 'web') ? "20%": "60%",
    }
  });