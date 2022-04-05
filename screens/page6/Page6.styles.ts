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
      textAlign: "center",

    },
    devicesTitle: {
      fontSize: 12,
      textAlign: "center",
    },
    devicesIcons: {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      borderWidth: 1,
      padding: 5,
      height: 100,
      marginTop: 10,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: 'white',
      radiusBordered: true,
      borderRadius: 30,
      marginTop: 10,
      flex: 1,
    },
    boxes: {
        backgroundColor: 'white',
        borderRadius: 1,
        borderWidth: 1,
        margin: 10,
        padding: 20,
    },
    item: {
      padding: 35,
      marginVertical: 8,
      flex:1,
      marginHorizontal: 6,
    },
    stuff: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      display: "flex",
    },
    buttons: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
    }
  });