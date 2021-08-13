import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
        id: '1',
        Image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg'
    },
    {
        id: '2',
        Image: 'https://pixwares.com/wp-content/uploads/2021/01/anh-gai-xinh.jpg'
    },
    {
        id: '3',
        Image: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
    },
    {
        id: '4',
        Image: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg'
    },

];


export default function Wishlist() {
    

    const renderItem = ({ item }) => (
        <View style={{flex: 1, margin: 10 }}>
            <Text style={{ fontSize: 22, marginVertical:5,marginLeft:5}}>Tshirt BlackWinter</Text>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{ height: 250, width: '40%', marginHorizontal:10,marginBottom:30}}
                    source={{ uri: item.Image }}
                />
                <View style={{ flexDirection: 'row', marginBottom:30}}>
                    <View>
                        <Text style={{ fontSize: 30}}>150$</Text>
                        <Text style={{ fontSize: 22, marginTop: 15 }}>SHA#: 2311584569 </Text>
                        <TouchableOpacity style={{alignItems: 'center',justifyContent: 'center',backgroundColor: "#d8d5d5",padding: 10,height: 40,width: '90%',margin: 10,}}>
                            <View >
                                <Text>Add to Cart</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems: 'center',justifyContent: 'center',backgroundColor: "#d8d5d5",padding: 10,height: 40,width: '90%',margin: 10,}}>
                            <View >
                                <Text>Remove from WishList</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
        </View>
    );
    return (
        <View style={{flex: 1}}>
            
            <SafeAreaView style={{flex: 1}}>
                <View>
                    <FlatList 
                        style={{marginTop: 10}}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
            <View style={{height:60,flexDirection:'row', justifyContent:'center',alignItems:'center',}}>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="home-outline" size={25} color="black"/>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="search-outline" size={25} color="black"/>
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
    },
});