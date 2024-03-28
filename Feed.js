import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import Slide from "./components/Slide";
import { ScrollView } from "react-native-gesture-handler";
import CollectionsCard from "./components/CollectionsCard";
import { GetFlacons, GetCollections } from "./service/api.js";
import { useState, useEffect } from "react";

export default function Feed() {
  const [data, setData] = useState([]);
  const [dataCollections, setDataCollections] = useState([]);
  let [fontsLoaded] = useFonts({
    Josefin_sans: require("./assets/fonts/JosefinSans-Regular.ttf"),
    Josefin_medium: require("./assets/fonts/JosefinSans-Medium.ttf"),
  });
 
  useEffect(() => {
    const fetchData = async () => {
      const resp = await GetFlacons();
      const collections = await GetCollections();
      setData(resp);
      setDataCollections(collections);
    };

    fetchData();
    
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            padding: 20,
            borderBottomColor: "#2B2B2B",
            borderBottomWidth: 1,
          }}
        >
          <Text style={[styles.text, { fontSize: 24 }]}>Musee du Parfum</Text>
        </View>
        <View>
          <Text style={[styles.text, { fontSize: 24, padding: 20 }]}>
            Evénements
          </Text>
          <Slide />
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[styles.text, { fontSize: 24, padding: 20 }]}>
              Collections
            </Text>
          </View>

          <View
            style={{
              padding: 20,
              flexDirection: "row",
              flexWrap: "wrap",  
              justifyContent: "space-between",
            }}
          >
            {data !== null
              ? data.map((item, index) => (
                  <CollectionsCard item={item} key={index} />
                ))
              : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Josefin_medium",
  },
});
