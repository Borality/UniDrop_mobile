import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Button,
	SafeAreaView,
  Image,
} from "react-native";
import { styles } from "./Page9.styles";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";


export default function page7({ navigation }: { navigation: any }) {
	const [image, setImage] = useState<any | null>(null);
	//For picking image and displaying later with image as uri

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>You're all set!</Text>
            <TouchableOpacity key={1} onPress={() => navigation.goBack()}>
              <AntDesign name="back" size={50} />
            </TouchableOpacity>
            <Button
              title="Send Again"
              color="#6495ed"
              onPress={() => navigation.navigate("page7")}
            />
          </View>
        </View>
    );
  }
  
