import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
const { width, height } = Dimensions.get("screen");
import { useFonts } from "expo-font";
const SlideItem = ({ item }) => {

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Josefin_sans: require("../assets/fonts/JosefinSans-Regular.ttf"),
  });
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Zoom", {name : item.Name, img : item.Image[0].url, price : item.Prix, duration : item.Duree, desc : item.Description})}>
      <View style={styles.container}>
        <Image
          source={{ uri: item.Image[0].url }}
          resizeMode="cover"
          style={styles.img}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{item.Name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    
    padding: 20,
  },
  img: {
    height: 250,
    width: "100%",
    borderRadius: 10,
  },
  content: {
    flex: 0.4,
    alignItems: "start",
  },
  title: {
    fontSize: 24,
    fontFamily: "Josefin_sans",
  },
});
