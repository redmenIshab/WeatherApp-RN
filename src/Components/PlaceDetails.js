import React from 'react';
import {View,Text} from 'react-native';
import SinglePlaceLayout from './SinglePlaceLayout';

const PlaceDetails =(props)=>{
    return(
        <SinglePlaceLayout>
        <View>
         <View style={styles.stylingPlaces}>
             <Text style={{color:'#00007f',fontSize:20}}>
            {props.location.place}
            </Text>
            <Text style={{color:'white'}}>
                Max: {props.location.max}
            </Text>
              <Text style={{color:'white'}}>
                Min: {props.location.min}
            </Text>
              <Text style={{color:'white'}}>
                Rain: {props.location.rain}
            </Text>
            </View>

        </View>
        </SinglePlaceLayout>
    );
};
const styles={
    stylingPlaces:{
        backgroundColor:'#07b39b',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
}

export default PlaceDetails;