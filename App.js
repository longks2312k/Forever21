import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RnIcon from 'react-native-vector-icons/Ionicons';

import Login from './AppShy/Login'
import ListItem from './AppShy/ListItem'
import Item from './AppShy/Item'
import Wishlist from './AppShy/Wishlist'
import YourBag from './AppShy/YourBag'
import Product from './AppShy/Product'

const Home = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity  onPress={() => {navigation.navigate('Product');}} style={{flex:1, justifyContent:'center',alignItems:'center',}}>
          <Image
            style={{ height: 300, width: '98%', justifyContent:'center',alignItems:'center',marginHorizontal:5}}
            source={{ uri: 'https://i.pinimg.com/originals/a3/0a/49/a30a49923011bc6e59a5ca802d61f894.png' }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Product');}} style={{flex:1, justifyContent:'center',alignItems:'center',}}>
          <Image
            style={{ height: 300, width: '98%', justifyContent:'center',alignItems:'center',marginVertical:5}}
            source={{ uri: 'https://1.bp.blogspot.com/-xmLV-ndC7M8/XszBqHMA_xI/AAAAAAAAmJA/53uO3K3Y9okVlMBsfqnQeFVp0DpxqcreQCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252818%2529.jpg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('Product');}} style={{flex:1, justifyContent:'center',alignItems:'center',}}>
          <Image
            style={{ height: 300, width: '98%', justifyContent:'center',alignItems:'center',marginHorizontal:5}}
            source={{ uri: 'https://pixwares.com/wp-content/uploads/2021/01/anh-gai-xinh.jpg' }}
          />
        </TouchableOpacity>
      </ScrollView>
      <View style={{height:60,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity 
          onPress={() => {
          navigation.navigate('Home');}}
          style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <RnIcon name="home-outline" size={25} color="black"/>
            <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          navigation.navigate('Product List');}} 
          style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <RnIcon name="list-outline" size={25} color="black"/>
            <Text>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          navigation.navigate('WishList');}} 
          style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <RnIcon name="heart-outline" size={25} color="black"/>
            <Text>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
          navigation.navigate('Your Bag');}} 
          style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <RnIcon name="cart-outline" size={25} color="black"/>
            <Text>Bag</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
          navigation.navigate('Login');}} 
          style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <RnIcon name="person-outline" size={25} color="black"/>
            <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Item} />
        <Stack.Screen name="Product List" component={ListItem} />
        <Stack.Screen name="WishList" component={Wishlist} />
        <Stack.Screen name="Your Bag" component={YourBag} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;