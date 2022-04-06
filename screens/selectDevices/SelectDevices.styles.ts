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
      textAlign: "center",
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    item: {
      padding: 25,
      marginVertical: 8,
      flex:1,
      marginHorizontal: 15,
    },
    safeArea: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      display: "flex",
    },
    buttonText: {
      fontWeight: "700",
      fontSize: 16,
    },
    button: {
      backgroundColor: "#6495ed",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      marginHorizontal: 15,
    },
  });