import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Button,
  FlatList,
} from "react-native";
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
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
            <Modal animationType="slide" transparent={true} visible={visible}>
              <View style={styles.modalContent}>
                <Text style={[styles.modalText, { fontWeight: "bold" }]}>
                  Trier avec la collection
                </Text>
                {dataCollections !== null
                  ? dataCollections.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setVisible(false), setSelectedItem(item);
                        }}
                        key={index}
                      >
                        <Text style={styles.modalText}>{item.Name}</Text>
                      </TouchableOpacity>
                    ))
                  : null}
                <Button title="Fermer" onPress={() => setVisible(false)} />
              </View>
            </Modal>
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => setVisible(true)}
            >
              <Image
                source={require("./assets/filter-512.webp")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
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
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    marginHorizontal: 20,
    marginTop: 100,
    borderRadius: 10,
    elevation: 5,

    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
