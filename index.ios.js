import React from 'react';
import {AppRegistry,View} from 'react-native';
import Header from './src/Components/Header';
import PlaceList from './src/Components/PlaceList';

const WeatherApp =() => {
  return(
    <View>
    <Header title="weather"/>
    <PlaceList />
    </View>
  );
};

AppRegistry.registerComponent('WeatherApp',()=>WeatherApp);

