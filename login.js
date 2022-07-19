import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import * as RootNavigation from './RootNavigation';
import { database } from './config';

export default function LoginPage() {

    const [email, emailChange] = useState("");
    const [password, changePassword] = useState("");

    const validation = () => {
        let setData = [];
        let dot = email.indexOf(".");
        let atrate = email.indexOf("@");
        database.ref('users').once('value').then((item) => {
            let users = [];
            console.log(item.val());
            item.forEach((childSnapshot) => {
                users.push(childSnapshot.val())
            })
            console.log(users);
            setData = users;
            console.log(setData);
            if (!email) {
                alert('Please Enter Email');
            }
            else if (dot < 1 || dot - atrate < 2) {
                alert('Entered Email is not valid');
            }
            else if (!password) {
                alert('Please Enter password');
            }
            else {
                var count = 0;
                for (let i = 0; i <= setData.length; i++) {
                    if (email == setData[i].email && password == setData[i].password) {
                        count = count + 1;
                        localStorage.setItem("Login_User",JSON.stringify(setData[i]));
                        RootNavigation.navigate("Dashboard");
                    }
                }
                if (count == 0) {
                    alert('invalid credintals');
                }
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <ImageBackground
        style={{flex:1}}
        source={require('./assets/image6.jpg')}
        >
        <View style={styles.container}>
            <Text style={styles.label}> Email*</Text>
            <TextInput style={styles.input}
                onChangeText={text => emailChange(text)}
                value={email}
            />
            <Text style={styles.label}> Password*</Text>
            <TextInput style={styles.input}
                onChangeText={text => changePassword(text)}
                value={password}
            />
            <Text>
                {"\n"}
            </Text>
            <Button

                onPress={() => validation()} title="Login">
            </Button>
            <Text>
                {"\n"}
            </Text>

            <TouchableOpacity
                style={styles.position}
                onPress={() => RootNavigation.navigate("SignupPage")}>
                <Text style={styles.titleText}>New User?  RegisterNow</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
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
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
})