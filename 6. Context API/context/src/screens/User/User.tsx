import React, { useContext } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import { UserContext } from "../../contexts/userContext";

type UserScreenProps = {
  route: RouteProp<RootStackParamList, "User">;
};

export function User({ route }: UserScreenProps) {
  const { username } = route.params;
  const userContextValue = useContext(UserContext)
  const nomeDinamico = userContextValue?.loginName || "Nenhum nome salvo";
  const nomeEstatico = userContextValue?.nome || "Nenhum nome fornecido"

  return (
    <View style={styles.container}>
      <Text>Bem vindo: {nomeEstatico} </Text>
      <Text>Bem vindo: {nomeDinamico} </Text>
    </View>
  );
}
