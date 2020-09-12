import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"

export default function Header({navigation}) {
    const openMenu = () =>{
        navigation.openDrawer()
    }
    return (
        <SafeAreaView>
        <View style = {styles.header}>
            {/* <MaterialIcons name="menu" size={20} onPress ={()=>{openMenu}} style = {styles.icon} /> */}
            <View style = {styles.headerText}>
                <Text style={styles.header}>My village</Text>
            </View>

        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:"coral" ,

        width:100,
        height:100,
        // flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    headerText:{
        color:"#333",
        fontWeight:"bold"
    }, 
    icon:{
        position:"absolute",
        left:16
    }
})
