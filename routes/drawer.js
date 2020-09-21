import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import { createAppContainer } from 'react-navigation';
import About from '../src/components/About';
import React from "react"
const Drawer = createDrawerNavigator();
 

export default function drawer(){
    return (
        
         <Drawer.Navigator initialRouteName = "About">
            {/* <Drawer.Screen name = "Home" component = {HomeStack}/> */}
            <Drawer.Screen name = "About" component = {AboutStack} />
         </Drawer.Navigator>
        
    )
}