import React from 'react';
import {View,Text} from 'react-native';
import SinglePlaceLayout from './SinglePlaceLayout';

const PlaceDetails =(props)=>{
    return(
        <SinglePlaceLayout>
        <View>
         <View style={styles.stylingPlaces}>
             <Text style={{color:'#222831',fontSize:20}}>
            {props.location.place}
            </Text>
            <Text style={{color:'#222831'}}>
                Max: {props.location.max}
            </Text>
              <Text style={{color:'#222831'}}>
                Min: {props.location.min}
            </Text>
              <Text style={{color:'#222831'}}>
                Rain: {props.location.rain}
            </Text>
            </View>

        </View>
        </SinglePlaceLayout>
    );
};
const styles={
    stylingPlaces:{
        backgroundColor:'#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
}

export default PlaceDetails;