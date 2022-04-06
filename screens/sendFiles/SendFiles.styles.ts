import { StyleSheet } from 'react-native';

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
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    buttonContainer: {
      width: "60%",
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      backgroundColor: "#5D8AA8",
    },
    button: {
      backgroundColor: "#0782F9",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 5,
    },
    buttonText: {
      fontWeight: "700",
      fontSize: 16,
    }
  });