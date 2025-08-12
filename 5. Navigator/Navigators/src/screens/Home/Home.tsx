import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';

export function Home({navigation}: any) {

  function navToGallery(){
    navigation.navigate('gallery')
  }

  return (
    <View style={styles.container}>
        <Text>Home works</Text>
        <Button title='Go to Gallery' onPress={navToGallery}>

        </Button>
    </View>
  );
}