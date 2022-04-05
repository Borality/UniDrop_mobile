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
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    item: {
      padding: 35,
      marginVertical: 8,
      flex:1,
      marginHorizontal: 6,
    },
    safeArea: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between',
      display: "flex",
    },
  });