import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Field from "../costom_comps/field";
import Btn from "../costom_comps/btn";

export default function SignIn(props){
    return(
        <View style={styles.mainview}>
                <Text style={styles.t1} >SignIn</Text>
                <View style={styles.v1}>

                    <Text style={styles.v1t1} >Email</Text>
                    <Field placeholder="Enter Your Email Here"  keyboardType={"email-address"} />

                    <Text style={styles.v1t1} >Password</Text>
                    <Field placeholder="Enter Your Password Here" secureTextEntry={true} />
                    
                    <TouchableOpacity onPress={() => alert("Remember Your Password and SignIN")}>
                        <Text style={styles.text1} >
                            Forgot Password
                        </Text>
                    </TouchableOpacity>

                    <Btn bgColor='black' textColor='white' btnLabel='SignIn' Press={() => alert("Wrong Credentials or Logged In")} />

                    <View style={styles.v2} >
                        <Text style={{ textAlign:'center', color:'gray', fontSize:20 }} >New User?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                            <Text style={{fontSize:20, fontWeight:'bold', color:'darkgreen'}} >
                                SignUp
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
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
        height:450 ,
        width:300,
        borderRadius:80,
        paddingVertical:40,
        marginTop:10,
    },
    v1t1:{
        fontSize:20,
        marginTop:10,
        marginBottom:5
    },
    text1:{
        fontSize:20,
        fontWeight:'bold',
        color:'darkgreen',
        marginBottom:20,
    },
    v2:{
        marginTop:20,
        display:'flex',
        flexDirection:'row'
    },
})