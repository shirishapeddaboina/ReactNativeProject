import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, ImageBackground} from 'react-native';
import { database } from './config';
import Icon from 'react-native-vector-icons/Feather';


export default function SignupPage() {
    const [userName, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [password, changePassword] = useState("");
    const [conformPWD, changeConformPWD] = useState("");
   

    postMessage = () => {
        

        if (!userName) {
            alert('Please Enter Name');
            return false;
            
        }
        else if (!email) {
            alert('Please Enter email');
            return false;
            
        }
        let dot = email.indexOf(".");
        let atrate = email.indexOf("@");
        
        if (dot < 1 || dot - atrate < 2 ) {
            alert('Entered Email is not valid');
            return false;
            
        }
        else if (!password) {
            alert('Please Enter password');
            return false;
            
        }
        else {
            const data = {
                id: Number(new Date()),
                userName: userName,
                email: email,
                password: password
            };

            database.ref('users').update({ [data.id]: data }).then(() => {
                console.log("Inserted");
            }).catch((error) => {
                console.log(error);
            })

        }
    }


    return (
        <ImageBackground
        style={{flex:1}}
        source={require('./assets/image5.jpg')}
        >
        <View style={styles.container}>

            <ScrollView>
            <Icon name="arrow-left" onPress={() => navigation.navigate('Login')} size={30} ></Icon>
                
                <Text style={styles.label}> Name*</Text>
                <TextInput style={styles.input}
                    onChangeText={text => nameChange(text)}
                    value={userName}
                />

                <Text style={styles.label}> Email*</Text>
                <TextInput style={styles.input} onChangeText={text => emailChange(text)}
                    value={email}
                />

                <Text style={styles.label}> Password*</Text>
                <TextInput style={styles.input} onChangeText={text => changePassword(text)}
                    value={password}
                />

                <Text style={styles.label}> Conform Password*</Text>
                <TextInput style={styles.input} onChangeText={text => changeConformPWD(text)}
                    value={conformPWD}
                />

                <Text>
                    {"\n"}
                </Text>

                <Button
                    onPress={() => postMessage()} title="Register" >
                </Button>



            </ScrollView>

        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        // backgroundColor: '#fff',
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
    },
    position: {
        alignItems: 'center'
    }
})