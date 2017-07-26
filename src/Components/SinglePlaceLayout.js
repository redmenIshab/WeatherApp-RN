import React from 'react';
import {View,Text} from 'react-native';

const SinglePlaceLayout =(props) =>{
    return(
        <View style={styles.placeStyle}> 
                {props.children}
        </View>

    );
};
const styles={
    placeStyle:{
        borderColor:'#497a74',
        borderWidth:2,
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:10,
        shadowColor:'#000',
        shadowOpacity:.3,
        shadowOffset:{width:0,height:4}
    }
};
export default SinglePlaceLayout;