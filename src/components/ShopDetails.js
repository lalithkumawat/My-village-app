import React from 'react'
import { View, Text, ScrollView, SafeAreaView, FlatList, TouchableHighlight, StyleSheet, Button, Image } from 'react-native'

export default function ShopDetails({route, navigation}) {
    console.log(route.params);
    const {shop,shopName} = route.params;
    return (
        <View style = {{flex:1}}>
            
            <View style = {{flex:1, alignItems:"center",borderRadius:20,}}>
            <Image
            source={require("./../assets/im.jpg")}
            style={{flex:1,width:200, height:200,justifyContent:"center",borderRadius:20,}}
            />
            </View>
            <View style = {{flex:3,alignItems:"center"}}>
                <Text>Shop name: {shop.shopName}</Text>
                <Text>Shop Owner: {shop.shopOwner.name}</Text>
                <Text>Contact: {shop.shopOwner.contact}</Text>
                <Text>Address: {shop.shopAddress}-{shop.pincode}</Text>
                <View style ={{flex: 1, flexDirection:"row", backgroundColor:"pink" }}>
                <View style ={{flex:1, backgroundColor:"blue" }}></View>
                <View style ={{flex:2, backgroundColor:"yellow" }}></View>
            </View>
            
            </View>
            

            
        </View>
    )
}
