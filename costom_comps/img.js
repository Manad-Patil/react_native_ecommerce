import React from "react";
import { View, ImageBackground  } from "react-native";

const Bg = ( {children} ) => {

    return (
        <View>
            <ImageBackground source={require("./home.jpg")} style={{ height:'100%'}} />
            <View style={{position:'absolute'}} >
                {children}
            </View>
        </View>
    );
}

export default Bg;