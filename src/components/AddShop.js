import React, { Component } from 'react'

import {SafeAreaView,View, Text, Image,Button, Picker } from 'react-native'
import { Input,Icon } from "react-native-elements"
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import * as ImagePicker from "expo-image-picker";
import * as Permissions from 'expo-permissions';
import * as firebase from "firebase"


const ref = firebase.firestore().collection("shops")


export default class Addshop extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
            shop: {
                _id:"",
                shopName: "",
                shopOwner: "",
                shopAddress: "",
                pincode: 0,
                contact: "",
                shopCategory: "",
                iconImage:null,
                images: []  
            },
            user:{
                image:"",
            },
            message:"",
            errorMessage:""
            
        }

    }

    
    onPressAddShop=async()=>{
        console.log("onpress add shop",this.state.shop);
        const ref = firebase.firestore().collection("shops").doc();
        this.setState ({shop:{_id:ref.id}})
        firebase.firestore().collection("shops").add(this.state.shop).then(()=>{
            this.setState({message:"Your Shop added"});
            console.log(this.state.message);
            
        }).catch(err=>{
            this.setState({errorMessage:"Some problem occurred while adding to cloud!!"})
            console.log(this.state.errorMessage);
        })
         
    }
    getPermissionAsync = async () => {
        if (Platform.OS === 'android') {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };

    onUploadImagePress = async (uri, imageName) => {
        //upload Image uri with imageName

        const response = await fetch(uri);
        //fetch uri 
        const blob = await response.blob()
        // get blob from uri
        return (await firebase.storage().ref().child("Images/" + imageName).put(blob))
        //upload blob to the firebase storage 
        // }
    }
    onChooseImage = async(imageName)=>{
        this.getPermissionAsync();
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.All,
              allowsEditing: true,
            //   aspect: [4, 3],
              quality: 1,
            }) 
            if (!result.cancelled) {
              this.onUploadImagePress(result.uri,imageName).then((data)=>{  
                  data.ref.getDownloadURL().then(url=>{
                      console.log("url",url);
                      
                      this.setState({shop:{iconImage:url}})
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
    onChooseIcon = async () =>{
        this.getPermissionAsync();
        this.onChooseImage("icon");
          
    }
    onHandleChange(value){
        if(value!=="0"){
            this.setState({...this.state.shop,shop:{shopCategory:value}})
        }else{
            alert("please choose a category")
        }
    }
    render() {
        
        return (
            <SafeAreaView 
            style = {{
                flex:1,
                margin:10,
                marginBottom:30,
                }}>
                <ScrollView  style = {{flex:1}}>
                    <TouchableWithoutFeedback 
                    onPress = {this.onChooseIcon}
                    style={{alignSelf:"center"}}>
                    {this.state.shop.iconImage===null?(<Icon
                                name='person'
                                size={70}
                                color='#CFCFCD'
                            />):(<Image  
                        source={{ uri: this.state.shop.iconImage }} 
                        style={{ borderRadius : 35,width: 70, height: 70,}} />)}
                        
                    </TouchableWithoutFeedback>
                    <Input
                        placeholder='Shop name'
                        leftIcon={
                            <Icon
                                name='shop'
                                size={24}
                                color='black'
                            />
                        }
                        onChangeText={(text) => this.setState({ shop: { ...this.state.shop, shopName: text } })}
                    />
                    <Input placeholder="Shop Owner"
                        leftIcon={
                            <Icon
                                name='person'
                                size={24}
                                color='black'
                            />
                        }
                    onChangeText={text=>this.setState({shop:{...this.state.shop,shopOwner:text}})}
                    />
                    <Input
                        placeholder="Shop Address"
                        leftIcon={
                            <Icon
                                name='shop'
                                size={24}
                                color='black'
                            />
                        }
                    onChangeText={text=>this.setState({shop:{...this.state.shop,shopAddress:text}})}

                    />
                    <Input
                        placeholder="Pin Code"
                        keyboardType="numeric"
                        leftIcon={
                            <Icon
                                name='brightness-low'
                                size={24}
                                color='black'
                            />
                        }
                    onChangeText={text=>this.setState({shop:{...this.state.shop,pincode:text}})}
                    />
                    <Input
                        placeholder="Contact"
                        keyboardType="numeric"
                        leftIcon={
                            <Icon
                                name='phone'
                                size={24}
                                color='black'
                            />
                        }
                    onChangeText={text=>this.setState({shop:{...this.state.shop,contact:text}})}
                    />
                    
                    <Picker
                        
                        selectedValue={this.state.shop.shopCategory}
                        style={{ height: 50, width: 150, alignSelf:"center" }}
                        onValueChange={(itemValue)=>this.onHandleChange(itemValue)}
                        mode="dropdown"
                        
                    >
                        <Picker.Item label = "Choose a category" value = "0"/>
                        <Picker.Item label="Novelty" value="Novelty" />
                        <Picker.Item label="Electronics" value="Electronics" />
                        <Picker.Item label="E-mitra" value="E-mitra" />
                        <Picker.Item label="Jewellers" value="Jewellers" />
                        <Picker.Item label="Mall" value="Mall" />
                        <Picker.Item label="Dairy" value="Dairy" />

                    </Picker>
                    
                    <Button title="Add a shop" onPress ={()=>{this.onPressAddShop()}} />
                </ScrollView>
            </SafeAreaView>
        )
    }
}




    // const [data,setData] = React.useState({
    //     id:0,    
    //     shopName: "",
    //     shopOwner: [{
    //         name: "",
    //         contact: "",
    //     }],
    //     shopAddress: "",
    //     pincode: 0,
    //     shopCategory: [],
    //     images: []
    // })
    
   