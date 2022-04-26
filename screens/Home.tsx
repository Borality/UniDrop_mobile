import {View,Button, StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { setSyntheticLeadingComments } from 'typescript';
import {stylesMain} from "../core-ui/components.styles";

export default function Home({ navigation }: { navigation: any }){

    return(
        <View style={stylesMain.container}>
            <Button title = "Scan" onPress={()=> navigation.navigate('Scanner')}/>
        </View>
    );
}

