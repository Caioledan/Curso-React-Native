import React, { useState, useContext } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { UserContext } from "../../contexts/userContext";
import { styles } from "./styles";

type HomeScreensProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

export function Home({ navigation }: HomeScreensProps) {
  const userContext = useContext(UserContext);
  const [inputText, setInputText] = useState("");
  const navigateToUserScreen = () => {
    userContext?.save(inputText)
    navigation.navigate("User", { username: inputText });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu nome"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button title="Logar" onPress={navigateToUserScreen} />
    </View>
  );
}
