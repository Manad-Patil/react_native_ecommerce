import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Btn({bgColor , btnLabel, textColor, Press }) {
    return (
        <TouchableOpacity onPress={Press} style={{backgroundColor :bgColor,  borderRadius:100, alignItems:'center', width:180, paddingVertical:7, marginVertical:10 }}>
            <Text style={{color:textColor, fontSize:30, fontWeight:'bold' }} >
                {btnLabel}
            </Text>
        </TouchableOpacity>
    );
}
