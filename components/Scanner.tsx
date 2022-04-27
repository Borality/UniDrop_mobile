import React, {useState,useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {stylesMain} from "../core-ui/components.styles";

export default function Scanner({navigation}: {navigation: any}){
    const [hasPermission, setHasPermission] = useState<any | null>(null);
    const [scanned,setScanned] = useState(false);

    useEffect(() => {
        (async () =>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[]);
    //When scan is successful give data which is room number
    const handleBarCodeScanned = ({type,data}: {type: any, data: any}) => {
        setScanned(true);
        navigation.navigate('JoinRoom', {
            roomNumber: data,
          });

    };

    if (hasPermission == null){
        return <Text>Requesting for Camera Permission</Text>
    }
    if(hasPermission === false){
        return <Text>No Access to Camera</Text>
    }

    return(
        <View style={stylesMain.container}> 
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style = {StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title = 'Tap to Scan Again' onPress={() => setScanned(false)}/>}
        </View>
    )
}

