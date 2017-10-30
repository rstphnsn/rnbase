import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { type, layout } from '../styles/common';

class Home extends Component {
  render() {
    return (
      <View style={layout.page}>
        <View style={layout.container}>
          <Text style={type.h1}>Simple, smart, fast</Text>
          <Text style={type.h2}>High performance digital engineering</Text>
          <Text 
            style={type.p, type.link}
            onPress={() => Linking.openURL('http://stphnsn.com')}
          >
            Find out more
          </Text>
        </View>
      </View>
    );
  }
}

export default Home;
