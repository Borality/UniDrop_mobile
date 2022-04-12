import React from 'react';
import {Text,View, ActivityIndicator,StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
const FormSuccess = ()=>{
    return(
        <Overlay overlayStyle = {styles.Overlay} isVisible={true}>
        <ActivityIndicator size="large" color="#2FBBF0"/>
        </Overlay>
    )
    
}
export default FormSuccess;
const styles = StyleSheet.create({
    Overlay:{
        width:'10%',
        height:100,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    },
})