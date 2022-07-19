import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button,ImageBackground } from 'react-native';
import { database } from './config';

export default function LoginPage() {

    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [password, passwordChange] = useState("");
    const [displayText, setError] = useState(false);
    //const [submitted, trySubmit] = useState(false);

    const validation = () => {
        if(email != '@')
        {
            setError('invalid email');
        }

    }


    return (
        <ImageBackground
        style={{flex:1}}
        source={require('./assets/image5.jpg')}
        >
        <form>
            <View style={styles.container}><br></br>

                <Text style={styles.title}>Signup</Text><br></br>
                <ScrollView>

                    
                {displayText ?
                        <Text >
                            You didn't enter Email or password
                        </Text>
                        :
                        <Text>
                            Please enter the requested information
                        </Text>
                    }

                    <Text style={styles.label}> Name*</Text>
                    <TextInput style={styles.input} onChangeText={text => nameChange(text)}
                        value={name}
                    /><br></br>

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
                        onPress={() => validation()} title="Submit">

                    </Button>

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
        //backgroundColor: 'lightblue',
        paddingRight: 20,
        paddingTop: 100,
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
        backgroundColor: 'color',
        paddingTop: 10,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 3
    },
    title: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }

})