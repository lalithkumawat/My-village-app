import React, { Component } from 'react'
import { 
    View, Text, SafeAreaView,Image, ScrollView, Button,
    Platform,
    TouchableWithoutFeedback
} from 'react-native'
import Header from './Header'
// import { firebase } from "../firebase/config";

import { Input,Icon } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from 'expo-permissions';
import * as firebase from "firebase"

export default class About extends Component {
    constructor(props) {
        super(props)
        this.getUser()
        this.state = {
            user: {
                name: "",
                image :null,
            },
            shops:[]
        }
    }
    
    showShops (){
        if(this.state.shops!==[]){
            this.state.shops.map(shop => {
                console.log("Shopname :" ,shop.shopName);
                
                return (
                    <Text>{shop.shopName}</Text>
                )
            })
        }
        return null
    }
    getUser = async () => {
        const userDoc = await firebase.firestore()
            .collection("shops")
            .get()
            .then(querySnapshot=>{
                console.log(querySnapshot.size);
                let shops = this.state.shops;
                querySnapshot.forEach(snap=>{
                    console.log("query snapshot",snap);
                    shops.push(snap.data())
                })
                this.setState({shops:shops})
                // console.log(this.state.shops.length);
                
                
            })

            
        // .doc().onSnapshot(doc=>{
        //     this.setState({
        //         user:{name:doc.data().name}
        //     })
            // console.log("inside await",doc.data())
            // return doc}
            // );
        // console.log("me",userDoc.name);
        
    }
    downloadImage=async()=>{
        // await firebase.storage().ref("https://console.firebase.google.com/project/my-village-app-e3494/storage/my-village-app-e3494.appspot.com/files").getDownloadURL().then(url=>{
        //     this.setState({user:{image:url}});
        //     console.log("url",url);
            
        // })
        // .catch((e) => console.log('getting downloadURL of image error => ', e));

    }
    addUser = async () => {
        await firebase.firestore().collection("user").add({
            details: { contact: 123456, address: "addresss" }
        }).then(() => {
            console.log("added");

        })
        // console.log(this.state.user.name);

    }
    getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };
    onChooseImagePress = async () =>{
        this.getPermissionAsync();
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
            });
            if (!result.cancelled) {
            //   this.setState({ image: result });
              this.onUploadPress(result.uri,"test-image" )
              .then((data)=>{
                  data.ref.getDownloadURL().then(url=>{
                      console.log("url",url);
                      
                      this.setState({user:{image:url}})
                  })
                  console.log("sucksess");
              })
              .catch((err)=>{
                  console.log("err while uplosding",err);
                  
              })
            }
      
            console.log(result);
          } catch (E) {
            console.log(E);
          }
    }
    onUploadPress= async (uri, imageName)=>{
        // if(this.state.user.image!==null){
            
            const response = await fetch(uri); 
            //fetch uri 
            const blob =await response.blob()  
            // get blob from uri
            return (await firebase.storage().ref().child("Images/"+imageName).put(blob)) 
            //upload blob to the firebase storage 
        // }
    }
    render() {
        this.downloadImage();
        return (
            <ScrollView style={{flex:1}}>
            <View style={{ alignItems: "center", alignContent: "space-between" }}>
                <Text>About screen</Text>
                {/* <Text style={{ fontSize: 20 }}>{this.state.user.name}</Text> */}
                <Input
                    placeholder="Say your Name"
                    value={this.state.user.name}
                    onChangeText={(text => {
                        this.setState({ user: { name: text } })
                    })}

                />
                <Button
                    title="Choose image"
                    onPress={this.onChooseImagePress}
                />
                
                <View>
                    {this.state.shops!==[]?
                    this.state.shops.map(shop => {
                        console.log("Shopname :" ,shop.shopName);
                        
                        return (
                            <Text>{shop.shopName}</Text>
                        )
                    }):null
                    }
                </View>
                <View>
                    {this.showShops()}
                </View>
                <View>
                    <TouchableWithoutFeedback onPress= {this.onChooseImagePress}>
                <View style ={{
                        borderRadius : 50,
                        // backgroundColor:"coral",
                        width:70,
                        height:70,
                        borderWidth:2,
                        borderColor:"cyan"
                    }}
                    
                    >
                        {/* <Icon
                                name='person'
                                size={100}
                                
                                color='black'
                            /> */}
                        {this.state.user.image===null?<Icon
                                name='person'
                                size={70}

                                color='black'
                            />:<Image  
                        source={{ uri: this.state.user.image }} 
                        style={{ borderRadius : 35,width: 70, height: 70, scaleX: 70,scaleY:50}} />}
                        
                    </View>
                    </TouchableWithoutFeedback>
                </View>
                <Button 
                onPress = {this.onUploadPress}
                title = "upload an Image"
                />

            </View>
            </ScrollView>

        )
    }
}

