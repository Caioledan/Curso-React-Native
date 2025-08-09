import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [ligado, setLigado] = useState(true);

  function handleSwitch(){
    setLigado(!ligado);
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <Switch value={ligado} onValueChange={handleSwitch} style={{marginTop: 20,}}></Switch>

        <Image source={require('./assets/fredicopopo.jpg')} style={{display: ligado ? "flex" : "none"}}/>

        <TextInput style={styles.input} onChange={(text) => {setUsuario(text.nativeEvent.text)}} value={usuario} keyboardType='numeric' placeholder='Digite um número'/>

          <Button title='Clique aqui' onPress={() => {Alert.alert('Valor atual: ', usuario)}}></Button>

        <View onTouchStart={(event) => {
          Alert.alert('Toque', 'Clique iniciado');
        }}
        onTouchEnd={(event) => {
          Alert.alert('Toque', "Toque finalizado")
        }}
        >
          <Text  style={[styles.texto, styles.border]}>Olá</Text>
        </View>

        <Text selectable={true} style={styles.texto} 
        onPress={() => {console.log('pressionado')}}
        onLongPress={() => {console.log('continua pressionado')}}
        >
          Open up App.tsx to start working on your app!
        </Text>
        <Text>Olá </Text>
        <Text>Mundo</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'blue',
    color: 'white',
    padding: 20,
  },
  border: {
    borderColor: 'red',
    borderWidth: 3,
  }
});
