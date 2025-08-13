import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/Home/Home";
import { User } from "./src/screens/User/User";
import UserContextProvider from "./src/contexts/userContext";

export type RootStackParamList = {
  Home: undefined;
  User: { username: string}
}

export default function App() {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <UserContextProvider>
        <Navigator>
          <Screen name="Home" component={Home} />
          <Screen name="User" component={User} />
        </Navigator>
      </UserContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
