import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function ContactUs() {
    const [name, nameChange] = useState("");
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [message, messageChange] = useState("");
    const [submitError, setError] = useState(false);
    const [submitted, trySubmit] = useState(false);

    postMessage = () => {
        if (!name || !email || !message) {
            setError(true);
        } else {
            setError(false);
            trySubmit(true);
        }
    }

    return (
        <View style={styles.container}>

            <ScrollView>
                {submitError ?
                    <Text >
                        You didn't enter a Name ,Email or Message
                    </Text>
                    :
                    <Text>
                        Please enter the requested information
                    </Text>
                }

                {submitted ?
                    <Text>
                        Name:{name} Email:{email}
                    </Text>
                    :
                    <Text>
                        *Required
                    </Text>
                }
                <Text style={styles.label}>
                    Name*
                </Text>
                <TextInput style={styles.input}
                    onChangeText={text => nameChange(text)}
                    value={name}
                />

                <Text style={styles.label}> Email*</Text>
                <TextInput style={styles.input} onChangeText={text => emailChange(text)}
                    value={email}
                />

                <Text style={styles.label}> Phone</Text>
                <TextInput style={styles.input} onChangeText={text => phoneChange(text)}
                    value={phone}
                />

                <Text style={styles.label}> Message*</Text>
                <TextInput style={styles.multi} onChangeText={text => messageChange(text)}
                    value={message}
                    multiline numberOfLines={6}
                />

                <Button
                    style={styles.button}
                    onPress={() => postMessage()} title="Submit">

                </Button>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
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
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 3
    },
    multi: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 18,
        width: 300
    }
})