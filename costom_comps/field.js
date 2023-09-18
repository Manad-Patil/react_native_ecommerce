import React from "react";
import { TextInput, StyleSheet  } from "react-native";

const Field = props => {

    return (
        <TextInput 
        {...props} 
        style={style.text_style} 
        placeholderTextColor={'#006400'}>
        </TextInput>
    );
}

const style = StyleSheet.create({
    text_style:{
        borderRadius:100,
        color: '#006400',
        paddingHorizontal:10,
        width:'80%',
        backgroundColor:'white',
        height:'10%',
        marginBottom:10
    }
})

export default Field;