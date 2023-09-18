import React from "react";
import { View, Text, StatusBar, Image, Button, Alert, StyleSheet } from "react-native";

import Btn from "../costom_comps/btn";

export default function Home(props){
    return(
        <View style={styles.mainview}>
            <StatusBar hidden={true} />
            <View style={styles.view2}>
                <Image style={styles.img1}
                 source={ require('../assets/icon.png') }/>
            </View>
            <View style={styles.view3}>
            <Text style={styles.t1}>
                Welcome To My App
            </Text>
            <Text style={styles.t2}>
                we are at your service so that you can brows data without security concerns
            </Text>
            <Text style={styles.t3}>
                To Know More
            </Text>
            <Btn bgColor={'green'} btnLabel={'SignIn'} textColor={'white'} Press={()=> 
            props.navigation.navigate("SignIn")}>
            </Btn>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainview: {
        flex:1,
        backgroundColor:"darkslategrey"
    },
    view2:{
        flex:.5
    },
    view3:{
        flex:.5,
        alignItems:'center'
    },
    img1:{
        height:300,
        width:300,
        marginLeft:35,
        marginTop:50
    },
    t1:{
        fontSize:40,
        fontWeight:'bold',
        color:'black' 
    },
    t2:{
        fontSize:18,
        fontWeight:'bold',
        color:'darkviolet',
        margin:15,
    },
    t3:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    }

  });