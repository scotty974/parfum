import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Josefin_sans: require("./assets/fonts/JosefinSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "space-around", gap: 32, height: 300 }}>
        <Text
          style={{
            fontSize: 32,
            width: 185,
            textAlign: "center",
            fontFamily: "Josefin_sans",
            color: "#2B2B2B",
          }}
        >
          Musée du Parfum
        </Text>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FC9EA6",
              padding: 12,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Feed")}
          >
            <Text style={{ textAlign: "center", fontFamily: "Josefin_sans" }}>
              Continuer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 12, borderRadius: 10 }} onPress={() => navigation.navigate("Musée du parfum")}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Josefin_sans",
                color: "#FC9EA6",
                textDecorationLine: "underline",
              }}
            >
              Découvrir le Musée
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "JosefinSans-Regular",
  },
});
