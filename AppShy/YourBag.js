import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity,SafeAreaViewBase, StatusBar,SafeAreaView, ScrollView, Image, Dimensions } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
        id: '4',
        Image: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg'
    },

];


export default function YourBag() {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <Text style={{ fontSize: 22, marginVertical:5,marginLeft:15}}>Tshirt BlackWinter</Text>
                <View style={{marginBottom: 10}}>
                    <View style={{ flexDirection: 'row'}}>
                        <Image
                                style={{ height: 200, width: '30%', marginHorizontal:20,marginBottom:20}}
                                source={{ uri: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg' }}
                            />
                        <View style={{ flexDirection: 'row', marginBottom:20}}>
                            <View>
                                <Text style={{ fontSize: 22}}>150$</Text>
                                <Text style={{ fontSize: 16, marginTop: 15 }}>SHA#: 2311584569 </Text>
                                <Text style={{ fontSize: 16, marginTop: 15 }}>Color: WHITE/BLUE </Text>
                                <Text style={{ fontSize: 16, marginTop: 15 }}>Size: M </Text>
                                <View style={{flexDirection:'row',marginTop:10}}>
                                    <TouchableOpacity style={{ top: 10, right: 10, fontSize: 18, borderWidth:1, height: 50, width:50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{fontSize: 33,marginBottom:3}}>-</Text>
                                    </TouchableOpacity>
                                    <View style={{ marginTop: 10, marginRight: 20, fontSize: 18, height: 50, width:80, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 20,justifyContent: 'center', alignItems: 'center'}}>Qty: 1</Text>
                                    </View>
                                    <TouchableOpacity style={{ top: 10, right: 10, fontSize: 18, borderWidth:1, height: 50, width:50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{fontSize: 23}}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{alignItems: 'center',justifyContent: 'center',backgroundColor: "#d8d5d5",padding: 10,height: 40,width: '30%',marginLeft: 20,}}>
                        <View >
                            <Text>Move to Wishlist</Text>
                        </View>
                    </TouchableOpacity>  
                </View>
                <View style={{borderTopWidth: 1,borderTopColor:"#d8d5d5",marginBottom: 20}}>
                    <Text style={styles.lb}>*Have A Promo?</Text>
                    <View style={{flexDirection:'row',width: '90%',marginHorizontal:20,marginTop:10,borderWidth:1,borderColor: 'black'}}>
                        <TextInput secureTextEntry={true} style={styles.textip}>
                            
                        </TextInput>
                        <TouchableOpacity style={styles.apply}>
                            <View >
                                <Text style={{marginLeft:10,marginTop:5}}>Apply</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{}}>
                    <View>
                        <View style={{
                            flexDirection:'row',
                            width: '90%',
                            height: 50,
                            borderWidth: 1,
                            borderBottomColor:'white',
                            borderColor:'#d8d5d5',
                            marginLeft: 20,
                        }}>
                            <Text style={{fontSize: 16,marginLeft:20,marginTop:25,marginRight:200}}>Subtotal</Text>
                            <Text  style={{fontSize: 16,marginLeft:20,marginTop:25}}>39.99$</Text>
                        </View>
                        <TouchableOpacity style={styles.checkout}>
                            <View >
                                <Text style={{fontSize: 22}}>Checkout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.pay}>
                            <View >
                                <Text style={{fontSize: 22}}>Apple Pay</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            width: '90%',
                            height: 50,
                            borderWidth: 1,
                            borderTopColor:'white',
                            borderColor:'#d8d5d5',
                            marginLeft: 20,
                            flexDirection:'row'
                        }}>
                            <Text style={{fontSize: 16,marginLeft:20,fontWeight:'bold',marginRight:150}}>Estimated total</Text>
                            <Text style={{fontSize: 16,marginLeft:20,fontWeight:'bold'}}>45.94$</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{height:60,flexDirection:'row', justifyContent:'center',alignItems:'center',}}>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="home-outline" size={25} color="black"/>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="list-outline" size={25} color="black"/>
                    <Text>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="heart-outline" size={25} color="black"/>
                    <Text>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="cart-outline" size={25} color="black"/>
                    <Text>Bag</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="person-outline" size={25} color="black"/>
                    <Text>Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textip: {
        height: 50,
        width: '70%',
        marginBottom: 8,
        marginLeft:20,
        marginVertical:10
    },
    
    lb: {
        fontSize: 16,
        marginHorizontal:20,
        marginTop:20
    },
    apply: {
        height: 40,
        width: '18%',
        backgroundColor:'#d8d5d5',
        marginBottom: 8,
        marginVertical:15,
        padding:3
    }
    ,checkout: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "yellow",
        padding: 10,
        height: 50,
        width: '90%',
        marginLeft: 20,
        marginBottom:10
    },
    pay: {
        alignItems: "center",
        backgroundColor: "#d5e5e8",
        padding: 10,
        height: 50,
        width: '90%',
        marginLeft: 20,
    }
});