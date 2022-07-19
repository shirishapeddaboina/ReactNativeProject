import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { database } from './config';


export default function UserDetail({ route, navigation }) {
    // const user_Name=props.route.params('userName', '');
    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setData] = useState([]);
    const { id } = route.params;
    const selectedPost = allPostData.find(post => post.id === id);

    useEffect(() => {
        database.ref('users').once('value').then((item) => {
            let users = [];
            item.forEach((childSnapshot) => {
                users.push(childSnapshot.val())
            })
            setData(users); // updating state
        })
        .catch((err)=>console.log(err))
        .finally(()=>finishLoading(false));
    }); // effect will run only once

    return (
        <View>
            {dataLoading ? <ActivityIndicator /> : (

                <ScrollView>
                    <Icon name="arrow-left" onPress={() => navigation.navigate('Users')} size={30} ></Icon>


                    <View style={styles.container}>
                        <Text style={styles.username}>{selectedPost.userName}</Text>

                        <Image source={selectedPost.image}
                            style={{ width: 100, height: 100, borderRadius: 500 }} />
{/* 
                        <Text style={styles.heading}>{selectedPost.messageText}</Text>

                        <Text style={styles.description}> {selectedPost.description} */}
                        {/* </Text> */}
                    </View>
                </ScrollView>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: "100%",
        widht: "100%",
    },
    username: {
        fontSize: '30px',
        fontWeight: 'bold',
        paddingTop: '30px',
        alignItems: 'center'

    },
    heading: {
        fontSize: '30px',
        fontWeight: 'bold',
        fontColor: 'red',
        paddingTop: '40px',
        alignItems: 'center'

    },
    description: {
        fontSize: '20px',
        fontWeight: 'bold',
        paddingTop: '60px',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        alignItems: 'start'

    }

})