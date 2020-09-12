import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Input, Button,Icon } from "react-native-elements"
import { } from 'react-native-gesture-handler'

export default function About() {
    const [shopName, onChangeShopName] = React.useState("")
    return (
        <View >
            <Input
                placeholder='Shop name'
                leftIcon={
                    <Icon
                        name='shop'
                        size={24}
                        color='black'
                    />
                }
                onChange={text=>{onChangeText(text)}}
                />
            <Input placeholder="Shop Owner" 
            leftIcon={
                <Icon
                    name='person'
                    size={24}
                    color='black'
                />
            }
            onChange={text=>{onChangeText(text)}}
            />
            <Input 
                placeholder="Shop Address" 
                leftIcon = {
                    <Icon
                        name='shop'
                        size={24}
                        color='black'
                    />
                }
                onChange={text=>{onChangeText(text)}}
                
                />
            <Input 
                placeholder="Pin Code" 
                keyboardType="numeric"
                leftIcon={
                    <Icon
                        name='local'
                        size={24}
                        color='black'
                    />
                }
                onChange={text=>{onChangeText(text)}}
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
                onChange={text=>{onChangeText(text)}}
                />
            <Button title="Add a Shop" />



        </View>

    )
}
