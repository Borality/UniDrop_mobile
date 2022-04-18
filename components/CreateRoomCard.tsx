import { MouseEvent } from 'react';
import {stylesMain} from "../core-ui/components.styles";
import {View, Text} from "react-native";
import {Button} from "react-native-elements"
type RoomCardProps = {
    onClick: (event: MouseEvent) => void;
}

export const CreateRoomCard = ({ onClick }: any) => {
  return (
        <View
        style={stylesMain.container}
        >
            <View style = {{flexDirection: 'column'}}>
                    <Text style={stylesMain.title}>
                        Share your files instantly
                    </Text>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}> */}
                <View style={{padding: 10}}>
                    <Button onPress={onClick} title="Create Room"/>
                </View>
            </View>
        </View>
  )
}
