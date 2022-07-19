import React, { useEffect, useState } from 'react';
  import { FlatList , ImageBackground} from 'react-native';
  //import { ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native-web';
  import {
    Container,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    MessageText,
    TextSection
  } from './styles/UsersStyle';
  import Icon from 'react-native-vector-icons/Feather';
 import * as Rootnavigation from './RootNavigation';
  import { database } from './config';
  
  
  export default function ManageUsers (){
    const [Messages, setData] = useState([]); // intial value is empty array
  
    useEffect(() => {
      database.ref('users').once('value').then((item) => {
        let users = [];
        console.log(item.val());
        item.forEach((childSnapshot) => {
          users.push(childSnapshot.val())
        })
        console.log(users);
        setData(users); // updating state
      })
    }, []); // effect will run only once
  
    const storyItem = ({ item }) => {
      return (
        <ImageBackground
        styles={{flex:1}}
        source={require('./assets/image2.jpg')}>
          <UserInfo>
            <UserImgWrapper>
              <UserImg source={item.image }/>
            </UserImgWrapper>
            <TextSection>
              <UserInfoText>
                <UserName>{item.userName}</UserName>
              </UserInfoText>
            
            </TextSection>
            
            
            <Icon.Button name ="edit" backgroundColor= "./assets/image2.jpg" onPress={() => Rootnavigation.navigate('Edit')} size={30}></Icon.Button>
          <Icon.Button name ="delete" backgroundColor= "./assets/image2.jpg" onPress={() => Rootnavigation.navigate('Edit')} size={30}></Icon.Button>
         
             </UserInfo>
        </ImageBackground>
      )
    }
    return (
      <Container>
        <FlatList
          data={Messages}
          keyExtractor={item => item.id}
          renderItem={storyItem}></FlatList>
      </Container>
    );
  };