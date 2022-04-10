import { StyleSheet, TextInput } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#5D8AA8',
    },
    mainContainer: {
      width: "60%"
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: "center",
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      borderRadius: 30,
      marginTop: 10,
    },
    textInput:{
      borderWidth: 1,
      padding: 5,
      height: 100,
      marginTop: 10,
    }
  });