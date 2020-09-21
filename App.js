import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

import Home from './src/components/Home';
import About from './src/components/About';
import AddShop from "./src/components/AddShop";
import CatDetails from './src/components/CatDetails';
import ShopDetails from './src/components/ShopDetails';

import { MaterialIcons } from "@expo/vector-icons"
import { Button,Image,View,Text } from 'react-native';

import { firebase } from "./src/firebase/config";
// import Header from './src/components/Header';
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

function HomeStackScreen({navigation}) {
  // const {navigation} = props
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
      // headerTitle:props => <MenuIcon {...props} />,
      headerTitleAlign:"center",
    //   headerLeft: () => <Icon
    //   name="menu"
    //   size = {30}
    //   onPress={()=>navigation.openDrawer()}
    // />  ,
      
    }}
    // options={{ headerTitle: props => <MenuIcon {...props} /> }}

    headerMode="screen"
    >
      <HomeStack.Screen 
          name = "Home" 
          component = {Home}
          options= {{
            // headerLeft:()=>MenuIcon(navigation)
          }}
          />

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
const getdb = () =>{
  console.log(firebase.firestore.name);
   
}
export default function App({navigation}) {

  const dbh = firebase.firestore();
  const ref = firebase.firestore().collection("shops");


    console.log("data",dbh.collection("shops"));
    const doc =  dbh.doc("/shops/id/");
    if (!doc.exists) {
    console.log('No such document!');
    } else {
    console.log('Document data:', doc.data());
    }
  async function addData() {
      await ref.add({
        id: 3,
        shopName: "Shri Ambeshwar Kirana store",
        shopOwner: {
            name: "Pukhraj",
            contact: "1234567890",
        },
        shopAddress: "Ajad Chowk, Posaliya",
        pincode: 307027,
        shopCategory: ["novelty", "Grocery", "Hair cutting"],
        images: ["../assets/im.jpg"]
    }).then(d=>{console.log("addd",d); })
      .catch(err=>{console.log("err",err);
      })
    
  }
  async function readData() {
    await ref.onSnapshot(q=>{
      q.forEach(doc=>{
        console.log(doc.data());
        
      
    })
    })
  }
  // addData()
  // readData()
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