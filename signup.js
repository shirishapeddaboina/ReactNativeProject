import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image, ImageBackground } from 'react-native';
import { database } from './config';
import Icon from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';


export default function SignupPage() {
    const [userName, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [password, changePassword] = useState("");
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    postMessage = () => {

        if (!userName) {
            alert('Please Enter Name');
            return false;
        }
        else if (!email) {
            alert('Please Enter Email');
            return false;
        }
        let dot = email.indexOf(".");
        let atrate = email.indexOf("@");
        if (dot < 1 || dot - atrate < 2) {
            alert('Entered Email is not valid');
            return false;
        }

        else if (!password) {
            alert("please enter password");
            return false;
        }
        else if (!image) {
            alert("please upload image");
            return false;
        }
        else {
            const data = {
                id: Number(new Date()),
                userName: userName,
                email: email,
                password: password,
                image: image
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
            style={{ flex: 1 }}
            source={require('./assets/image6.jpg')}
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

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Pick an image" onPress={pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>


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
    },
    position: {
        alignItems: 'center'
    }
})