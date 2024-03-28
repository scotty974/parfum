import { Text, View, FlatList, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import data from "../data.js";
import SlideItem from "./SlideItem.js";
import Menu from "./MenuNav.js";
import {GetEvents} from "../service/api.js";
const Slide = () => {
  const [dataEvents, setData] = useState(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      { useNativeDriver: false }
    )(event);
  };
  const fetchData = async () => {
    try{
      const resp = await GetEvents();
      setData(resp);
      
    }catch(error){
      console.log(error);
    }
    
  };
  useEffect(() => {
    fetchData();
  
  }, []);
  return (
    <View>
      <FlatList
        data={dataEvents}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        
      />
      {dataEvents !== null ? <Menu data={dataEvents} scrollX={scrollX} /> : null}
    </View>
  );
};

export default Slide;
