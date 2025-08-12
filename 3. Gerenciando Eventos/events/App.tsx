import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IAwaysComeBack } from './src/actions';

export default function App() {

  async function handleHello(){
    console.log("Hello world!")
  }

  async function handlePress(id: number){
    console.log("Pressionado", id)
  }

  return (
    <View style={styles.container}>

      <Text style={{fontSize: 22}} onPressIn={() => console.log("Fui pressionado primeiro")} onPress={() => console.log("Sou acionado se não houver LongPress")} onLongPress={() => console.log("Só sou acionado se segurar")} onPressOut={() => console.log("Fui acionado quando soltou")} onTextLayout={() => console.log("Sou acionado quando o texto aparece no layout")}>Component principal</Text>

      <Text onPress={() => console.log('Pressionado')}>Inline</Text>
      <Text onPress={handleHello}>Handler Function</Text>
      <Text onPress={() => handlePress(1)}>Handler Function with params</Text>
      <Text onPress={IAwaysComeBack}>The purple one or the golden one?</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
