import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Btn from "../costom_comps/btn";
import Field from "../costom_comps/field";

export default function SignUp(props){
    return(
            <View style={styles.mainview}>
                <Text style={styles.t1} >SignUp</Text>
                <View style={styles.v1}>
                    <Text style={styles.v1t1} >Name</Text>
                    <Field placeholder="Enter Your Name Here" />

                    <Text style={styles.v1t1} >Email</Text>
                    <Field placeholder="Enter Your Email Here" keyboardType={"email-address"} />

                    <Text style={styles.v1t1} >Password</Text>
                    <Field placeholder="Enter Your Password Here" secureTextEntry={true} />

                    <Text style={styles.v1t1} >Confirm Password</Text>
                    <Field placeholder="Re-Enter Your Password Here" secureTextEntry={true} />
                    
                    <Btn bgColor='black' textColor='white' btnLabel='SignUp' Press={() => {
                        alert("Account Created!")
                        props.navigation.navigate("SignIn")
                    }} />
                </View>
                    <View style={styles.v2} >
                        <Text style={{ color:'gray', fontSize:20, marginLeft:50 }} >Already User?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
                            <Text style={{fontSize:20, fontWeight:'bold', color:'darkgreen'}} >
                                SignIn
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
    );
}


const styles = StyleSheet.create({
    t1:{ textAlign:'center',
    color:'black',
    fontSize:80 ,
    marginBottom:10,
    marginVertical:70
    },
    mainview:{
        alignItems:'center' ,
        width:400 
    },
    v1:{
        alignItems:'center',
        backgroundColor:'yellow',
        height:500 ,
        width:300,
        borderRadius:80,
        paddingVertical:40,
        marginTop:10,
    },
    v1t1:{
        fontSize:20,
        marginTop:5,
        marginBottom:5
    },
    text1:{
        fontSize:20,
        fontWeight:'bold',
        color:'darkgreen',
        marginBottom:20,
    },
    v2:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'yellow',
        height:50 ,
        width:300,
        borderRadius:80,
        marginTop:5,
    },
})