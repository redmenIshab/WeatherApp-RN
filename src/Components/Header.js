import React from 'react';
import {View , Text} from 'react-native';

const Header =(props) => {
    return(
        <View style={styles.viewStyles}>
            <Text style={styles.textDecoration}>
                {props.title}
            </Text>
        </View>
    );
};

const styles ={
    textDecoration:{
        fontSize: 25,
         color:'#222831',
        
    },
    viewStyles:{
        height: 70,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00ADB5',

        shadowColor:'grey',
        shadowOffset:{width:2 , height:4},
        shadowOpacity:.5,

    }
}

export default Header;