import React from 'react'

import { View, Text, ScrollView, SafeAreaView, FlatList, TouchableHighlight, StyleSheet, Button, Image } from 'react-native'
import { Card } from 'react-native-elements';
import ShopDetails from "./ShopDetails"


export default function Catdetails({ navigation, route }) {
    console.log(navigation, route);

    const { Category } = route.params,
        shops =
            [
                {
                    id: 1,
                    shopName: "Shri Krishna Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },

                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"],
                },
                {
                    id: 2,
                    shopName: "Shri Ambeshwar Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },
                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"]
                },
                {
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
                },
                {
                    id: 4,
                    shopName: "Shri Ambeshwar Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },
                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"]
                },
                {
                    id: 5,
                    shopName: "Shri Ambeshwar Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },
                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"]
                },
                {
                    id: 6,
                    shopName: "Shri Ambeshwar Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },
                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"]
                },
                {
                    id: 7,
                    shopName: "Shri Ambeshwar Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },
                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"]
                },
                {
                    id: 8,
                    shopName: "Shri Ambeshwar Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },
                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"]
                },
                {
                    id: 9,
                    shopName: "Shri Ambeshwar Kirana store",
                    shopOwner: {
                        name: "Pukhraj",
                        contact: "1234567890",
                    },
                    shopAddress: "Ajad Chowk, Posaliya",
                    pincode: 307027,
                    shopCategory: ["novelty", "Grocery", "Hair cutting"],
                    images: ["../assets/im.jpg"]
                }

            ],
        colors = ["dodgerblue", "lightblue", "pink"],
        selectedShop = {},
        showSelectedShop = false
    return (
        <ScrollView >


            <View style={styles.background}>
                {shops.map((shop, id) => {
                    console.log(shop.shopOwner.name);

                    return (<View style={styles.row} key={id} >
                        <View style={styles.icon}>
                            <Image source={require("../assets/im.jpg")}
                                style={styles.iconImage} />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text key={id} style={{
                                fontSize: 18,
                                fontStyle: "italic",
                                textAlign: "center"
                            }}>
                                {shop.shopName}
                            </Text>
                            <Text style={{
                                fontSize: 14,
                                textAlign: "center"
                            }}>
                                by {shop.shopOwner.name}
                            </Text>
                            <Text
                                onPress={() => { navigation.navigate('ShopDetails', { shop: shop }) }}
                                style={{ textAlign: "right", alignSelf: "flex-end", marginEnd: 2 }}
                            >


                                More info</Text>
                        </View>

                    </View>)
                })}




            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f1f",
        flex: 1,
        height: "100%",
    },
    row: {
        backgroundColor: "beige",
        marginTop: 5,
        flexDirection: "row",
        borderRadius: 5,
        // borderWidth: 1,
        borderBottomColor: "#FFDAB9"
    },
    icon: {
        flex: 1,
        // backgroundColor:"plum"

    },
    iconImage: {
        height: 70,
        width: 70,
        borderRadius: 30,
        // borderColor:"plum",
        // borderWidth:2
    },
    cardText: {

        textAlign: "justify"
    }
})

// export default function CatDetails({ navigation }) {


//     const { Category } = navigation.route.params,
//         shops =
//             [
//                 {
//                     id: 1,
//                     shopName: "Shri Krishna Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },

//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"],
//                 },
//                 {
//                     id: 2,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 },
//                 {
//                     id: 3,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 },
//                 {
//                     id: 4,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 },
//                 {
//                     id: 5,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 },
//                 {
//                     id: 6,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 },
//                 {
//                     id: 7,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 },
//                 {
//                     id: 8,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 },
//                 {
//                     id: 9,
//                     shopName: "Shri Ambeshwar Kirana store",
//                     shopOwner: {
//                         name: "Pukhraj",
//                         contact: "1234567890",
//                     },
//                     shopAddress: "Ajad Chowk, Posaliya",
//                     pincode: 307027,
//                     shopCategory: ["novelty", "Grocery", "Hair cutting"],
//                     images: ["../assets/im.jpg"]
//                 }

//             ],
//         colors = ["dodgerblue", "lightblue", "pink"],
//         selectedShop = {},
//         showSelectedShop = false,





//     // onPressHandler(shop) {
//     //     console.log(shop);
//     //     this.props.navigation.navigate('ShopDetails',{shop: shop} )
//     //     // this.setState({ showSelectedShop: true, selectedShop: shop })
//     // }
//     // render() {

//     //     console.log(this.state.Category);

//     return (
//         <View>
//             <Text>text</Text>
//         </View>
//         // <ScrollView >
//         //     <SafeAreaView>

//         //         <View style={styles.background}>
//         //             {shops.map((shop, id) => {
//         //                 console.log(shop.shopOwner.name);

//         //                 return (<View style={styles.row} key={id} >
//         //                     <View style={styles.icon}>
//         //                         <Image source={require("../assets/im.jpg")}
//         //                             style={styles.iconImage} />
//         //                     </View>
//         //                     <View style={{ flex: 3 }}>
//         //                         <Text key={id} style={{
//         //                             fontSize: 18,
//         //                             fontStyle: "italic",
//         //                             textAlign: "center"
//         //                         }}>
//         //                             {shop.shopName}
//         //                         </Text>
//         //                         <Text style={{
//         //                             fontSize: 14,
//         //                             textAlign: "center"
//         //                         }}>
//         //                             by {shop.shopOwner.name}
//         //                         </Text>
//         //                         <Text
//         //                             onPress={() => { navigation.navigate('ShopDetails', { shop: shop }) }}
//         //                             style={{ textAlign: "right", alignSelf: "flex-end", marginEnd: 2 }}
//         //                         >


//         //                             More info</Text>
//         //                     </View>

//         //                 </View>)
//         //             })}


//         //             {/* <FlatList style={{margin:5}}
//         //     data={this.state.shops}
//         //     numColumns={2} 
//         //     keyExtractor={(item, index) => item.id }
//         //     renderItem={(item) =>{
//         //             console.log(item);

//         //             return (<View> title = {item.shopName}
//         //         </View>) }}
//         //     /> */}

//         //         </View>
//         //     </SafeAreaView>
//         // </ScrollView>

//     )

// }



