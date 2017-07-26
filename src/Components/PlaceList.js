import React from 'react';
import {View,Text} from 'react-native';
import PlaceDetails from './PlaceDetails';


export default class Placelist extends React.Component {

     state={
            locations:[]
        }
    componentWillMount(){
        return fetch('https://nepal-weather-api.herokuapp.com/api/?place=all')
        .then(res=>res.json())
        .then(resData => {this.setState({locations: resData.weather})})
    }
    renderAlbums(){
        return this.state.locations.map(location => <PlaceDetails location={location} key={location.place}/>)
    }
    render(){
        console.log(this.state.locations);
        return(
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}