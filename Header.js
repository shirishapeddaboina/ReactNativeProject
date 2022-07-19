import React from "react";
import { StyleSheet, Text, View, Image } from "react-native-web";
//import logo from './assets/logo.jpg';

export default function Header(props) {
    return (
        <View style={styles.Header}><br></br>
            {/* <Image source={logo} style={{ width: 55, height: 55 }} /> */}
            
            <View>
                <Text>
                    {props.headerDisplay}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    Header: {
        widht: '100%',
        height: 50,
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    }
        
});