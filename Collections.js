import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const Collections = ({route}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Image
            source={{ uri: route.params.img }}
            style={styles.img}
            resizeMode="cover"
          />
          <View
            style={{
              marginTop: 20,
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Text style={styles.title}>{route.params.name}</Text>
          </View>
          <View style={styles.content}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Josefin_sans",
                color: "#848484",
                width: "50%",
              }}
            >
              {route.params.origine} 
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Josefin_sans",
                color: "#848484",
              }}
            >
              {route.params.collection_name}
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: "start",
              justifyContent: "start",
              width: "100%",
            }}
          >
            <Text style={{fontSize:24}}>{route.params.desc}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Collections


const styles = StyleSheet.create({
    img: {
      width: "100%",
      height: 330,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      fontFamily: "Josefin_sans",
    },
    content: {
      marginTop: 16,
      justifyContent: "space-between",
      flexDirection: "row",
    },
  });