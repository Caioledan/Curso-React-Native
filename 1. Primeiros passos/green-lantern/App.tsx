import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import symbolOn from "./assets/images/symbol-on.png";
import symbolOff from "./assets/images/symbol-off.png"

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleSymbol(){
    setIsActive((oldValue:boolean) => {
      return !oldValue;
    })
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={() => {handleSymbol()}}>
      <Image source={isActive ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray"
  }
});
