import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'


import Header from './components/Header';
import Navigator from "./routes/drawer"
import Home from './components/Home';
import About from './components/About';
import AddShop from "./components/AddShop";
import CatDetails from './components/CatDetails';
import ShopDetails from './components/ShopDetails';
import drawer from './routes/drawer';
import { MaterialIcons } from "@expo/vector-icons"
import { Button,Image,View,Text } from 'react-native';

const Stack = createStackNavigator();
const AboutStack = createStackNavigator();
const AddAShopStack = createStackNavigator();
const HomeStack = createStackNavigator();

const Drawer = createDrawerNavigator();






function AddAShopScreen({navigation}){
  return(
    <HomeStack.Navigator
    screenOptions = {
      {headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign:"center"}
    }
    >

      <HomeStack.Screen name = "Add a Shop" component = {AddShop} opt/>
    </HomeStack.Navigator>
  )
}




function AboutStackScreen({navgation}) {
  return (
    <AboutStack.Navigator
    screenOptions = {
      {headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign:"center"}
    }
    >
      
      <AboutStack.Screen 
          name = "About" 
          component = {About}
          options={{ }}/>
      
    </AboutStack.Navigator>
  )
}
function HomeStackScreen({navgation}) {
  return (
    <HomeStack.Navigator 
    screenOptions = {
      {headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign:"center"}
    }
    >
      <HomeStack.Screen 
          name = "Home" 
          component = {Home}
          options={{ }}/>

        <HomeStack.Screen
          name= "CatDetails" 
          component ={CatDetails}
          options={({ route }) => ({ title: route.params.Category })}
          />
        <HomeStack.Screen
          name = "ShopDetails" 
          component = {ShopDetails}
          options={({ route }) => ({ title: route.params.shop.shopName })}
          
          />  
          {/* <HomeStack.Screen name= "AddShop"
         component ={AddShop}
         options={{ title: "Add a shop",}}
         /> */}
    </HomeStack.Navigator>
  )
}
function StackNavigation({route,navgation}){
  return (
        
    <Drawer.Navigator 

    
      >
         
        <Drawer.Screen name = "Home" component = {HomeStackScreen}/>
        <Drawer.Screen 
          name = "About" 
          component = {AboutStackScreen}
          
          // options={({navigation}) => (  navigation.setParams({otherParam: "About app"}) )}
          />
        <Drawer.Screen 
        name = "AddShop" 
        component = {AddAShopScreen}
        />
      


          
    </Drawer.Navigator>
   
)
}

export default function App() {
  return (

    <NavigationContainer

    >
      <Drawer.Navigator >
        <Drawer.Screen name = "Home" component = {HomeStackScreen}/>
        <Drawer.Screen 
          name = "About" 
          component = {AboutStackScreen}/>
        <Drawer.Screen 
        name = "AddShop" 
        component = {AddAShopScreen}
        
                  
        
        />
      </Drawer.Navigator>
      {/* <Stack.Navigator
        screenOptions={{
            
            // headerLeft:()=>{
            // <Button name="menu" size={20} color="#fff"
            //  style={{
            //   position:"absolute",
            //   color:"white",
            //   left:16}} onPress ={()=>{navgation.openDrawer()}}  />

            // },
          
        }}
        >

        <Stack.Screen name="Home" component={StackNavigation} />
        <Stack.Screen
          name= "CatDetails" 
          component ={CatDetails}
          options={({ route }) => ({ title: route.params.Category })}
          />
        <Stack.Screen
          name = "ShopDetails" 
          component = {ShopDetails}
          options={({ route }) => ({ title: route.params.shop.shopName })}
          
          />
        

        <Stack.Screen name= "AddShop"
         component ={AddShop}
         options={{ title: "Add a shop",
         headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign:"center"
        }}
         />
        <Stack.Screen 
          name = "About" 
          component = {About}
          options={{ 
            title: "About app",
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:"center",
            }}/>
      </Stack.Navigator> */}
      
    
      
   </NavigationContainer>

  );
}



/*
<Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: "center"
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  //   this.state = {
  //        categories: [
  //         { name: 'Grocery', code: '#1abc9c' },
  //         { name: 'Dairy', code: '#2ecc71' },
  //         { name: 'Mall', code: '#3498db' },
  //         { name: 'Novelty', code: '#9b59b6' },
  //         { name: 'Electronics', code: '#34495e' },
  //         { name: 'E-mitra', code: '#16a085' },
          
  //       ], 
  //       categorySelected:"",           // for reference
  //   }
  // }
  // onPressHandler(category){
  //   console.log(category);
  //   event.preventDefault();
  //   this.setState({
  //     categorySelected:category
  //   })
 
    
  // }
  render() {
    console.log("app.js");
    
    return (
      <Navigator/>
    )
    // if (this.state.categorySelected !=="")
    // {
    //   return <CatDetails Category  = {this.state.categorySelected}/>
    // }



    // // screen 1=>
    // return (
    //     <ScrollView >
    //     <Header/>
        
    //     <FlatGrid
    //     itemDimension= {130}
    //     style = {styles.gridView}
    //     data={this.state.categories}
    //     renderItem={({ item }) => (
    //       <View style={styles.itemContainer}>
    //         <Button  style={{textAlign: 'center'}}
    //         title = {item.name}
    //         color=  {item.code}
    //         onPress = {()=>{this.onPressHandler(item.name);}}
    //         />
            
    //       </View>
    //     )}
    //     />
    //       </ScrollView>

    //   )
    }
   
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  
  itemContainer:{
    
    borderRadius: 20,
  },
  container: {
    flex: 1,
    width:500,
    height:500,
    // borderRadius: 20,
    // borderWidth: 2,
    
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  welcome: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor:'pink',
    // textAlign: 'center'
  },
  image:{
    width:100,
    height:100
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'skyblue'
  },
});



*/