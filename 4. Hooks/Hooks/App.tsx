import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const reducer = (state: {counter: number}, action: {type: string}) => {
    switch(action.type){
      case 'increment':
        return {
          counter: state.counter + 1
        }
      case 'decrement':
        return {
          counter: state.counter + 1
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {counter: 0});

  const incrementCount = () => {
    dispatch({type: 'increment'});
  }

  const decrementCount = () => {
    dispatch({type: 'decrement'})
  }

  return (
    <View style={styles.container}>
      
      <Text>{state.counter}</Text>

      <Button title="Remover" onPress={decrementCount}></Button>
      <Button title="Adicionar" onPress={incrementCount}></Button>
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
