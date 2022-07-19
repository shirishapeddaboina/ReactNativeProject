import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, TouchableOpacity, ImageBackground} from 'react-native';
import * as RootNavigation from './RootNavigation';

export default function LoginPage() {

    const [email, emailChange] = useState("");
    const [password, passwordChange] = useState("");
    // const [isNotError, setError] = useState(false);
    // const [displayText, setText] = useState("");
    // const [allUsers, setUsers] = useState([]);
    const [submitError, setError] = useState(false);
    const [submitted, trySubmit] = useState(false);

    postMessage = () => {
        if (!email || !password) {
            setError(true);
        }
        else {
            setError(false);
            trySubmit(true);
        }
    }
    // const loginSuccess = () => {
    //     for(let i=0;i <= allUsers.length;i++){
    //         setC
    //     }
    // }

    return (
        <ImageBackground
        style={{flex:1}}
        source={require('./assets/image5.jpg')}
        >
        <form>
            <View style={styles.container}><br></br>

                <Text style={styles.title}>Login</Text><br></br>
                <ScrollView>

                    {submitError ?
                        <Text >
                            You didn't enter Email or password
                        </Text>
                        :
                        <Text>
                            Please enter the requested information
                        </Text>
                    }

                    {submitted ?
                        <Text>
                            Email:{email}
                        </Text>
                        :
                        <Text>
                            *Required
                        </Text>
                    }
                    

                    <Text style={styles.label}> Email*</Text>
                    <TextInput style={styles.input} onChangeText={text => emailChange(text)}
                        value={email}
                    />

                    <Text style={styles.label}> Password*</Text>
                    <TextInput style={styles.input} onChangeText={text => passwordChange(text)}
                        value={password}
                    /><br></br>

                    <Button
                        style={styles.button}
                        onPress={() => postMessage()} title="Submit">

                    </Button>

                    <TouchableOpacity
                    style={styles.position}
                    onPress={() => RootNavigation.navigate("SignupPage")}><br></br>
                    <Text style={styles.titleText}>New User?  Signup</Text>
                </TouchableOpacity>

                </ScrollView>
            </View>
        </form>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 800,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 100,
        //backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',

    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 25,
        width: 250
    },
    label: {
        fontSize: 18,
        paddingTop: 20

    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 3
    },
    title: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    position: {

        alignItems: 'center',

    },
    titleText: {
        fontSize: 15,
        fontWeight: 'bold'
    }

})