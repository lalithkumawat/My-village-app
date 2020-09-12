import React, { Component } from 'react'
import { Image, Button, FlatList , StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import GridView, { FlatGrid } from "react-native-super-grid";
import CatDetails from './CatDetails';
// import { TouchableHighlight } from 'react-native-gesture-handler';






export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
         categories: [
          { name: 'Grocery', code: '#1abc9c' },
          { name: 'Dairy', code: '#2ecc71' },
          { name: 'Mall', code: '#3498db' },
          { name: 'Novelty', code: '#9b59b6' },
          { name: 'Electronics', code: '#34495e' },
          { name: 'E-mitra', code: '#16a085' },
          
        ], 
        categorySelected:"",           // for reference
    }
  }
  onPressHandler(category){
    console.log(category);
    event.preventDefault();
    this.setState({
      categorySelected:category
    })
 
    
  }
  onPressAddShop=()=>{
      this.props.navigation.navigate('AddShop')
  }
  render() {
      console.log("home.js");
 
    return (
      <ScrollView >
        <View>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddShop') }}>
          
        </TouchableOpacity>
        
        <FlatGrid
          // itemDimension= {130}
          // style = {styles.gridView}
          data={this.state.categories}

          renderItem={({ item }) => (
            <View style={styles.itemContainer} key={item.key}>
              <Button style={{ textAlign: 'center' }}
                title={item.name}
                color={item.code}
                onPress={() => { this.props.navigation.navigate('CatDetails', { Category: item.name }) }}
              />

            </View>
          )}
        />
        </View>
      </ScrollView>

      )
    }
   
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  addBtn:{

  },
  iconImage:{
    height:30,
    width:30,
    borderRadius:30,
    // borderColor:"plum",
    // borderWidth:2
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



