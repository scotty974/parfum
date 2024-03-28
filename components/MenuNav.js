import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import React from "react";
const {width} = Dimensions.get("screen");
const Menu = ({ data, scrollX }) => {
  
  return (
    <View style={styles.container}>
      
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        })
        return <Animated.View key={idx.toString()} style={[styles.dot, { width: dotWidth }]} />;
      })}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal : 3,
    backgroundColor: "#FC9EA6",
  },
});
