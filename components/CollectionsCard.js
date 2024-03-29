import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
const CollectionsCard = ({ item }) => {
    
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({ 
    Josefin_sans: require("../assets/fonts/JosefinSans-Regular.ttf"),
    Josefin_medium: require("../assets/fonts/JosefinSans-Medium.ttf"),
  });
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Collections", { name: item.Name, img: item.Image[0].url, origine : item.Origine, collection_name : item.Collection, desc : item.Description })}>
      <View style={{ width: 170 }}>
        <Image
          source={{ uri: item.Image[0].url }}
          style={{ height: 200, width: "100%" }}
        />
        <View style={{ margin: 8 }}>
          <Text style={{ fontFamily: "Josefin_medium" }}>{item.Name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionsCard;
