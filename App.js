import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import BreedCell from './BreedCell'
import { petTypes, cats, dogs } from './breeds'
import StatusBar from './StatusBar';

// console.log(petTypes)

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  renderItems({ item, index}) {
    return (
      <BreedCell
        data={item}
        style={styles.cell}
        breed={item.breed}
      />
    )
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
        <Text>By Breed starter</Text>
        <FlatList 
          data={cats}
          renderItem={this.renderItems}
          keyExtractor={(item, index) => `${index}-${item.breed}`}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
