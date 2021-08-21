import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView,Image,StyleSheet,AppRegistry} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RnIcon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper'

import Login from './AppShy/Login'
import ListItem from './AppShy/ListItem'
import Item from './AppShy/Item'
import Wishlist from './AppShy/Wishlist'
import YourBag from './AppShy/YourBag'
import Product from './AppShy/Product'


const styles = StyleSheet.create({
  wrapper: {
    height:500,
    marginBottom:10
  },
  slide1: {
      flex: 1,
      alignItems: 'center',
  },
  slide2: {
      flex: 1,
      alignItems: 'center',
  },
  slide3: {
      flex: 1,
      alignItems: 'center',
  },
})

const Home = ({ navigation }) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Swiper style={styles.wrapper} showsButtons={false}>
          <View style={styles.slide1}>
            <Image
              style={{ height: 500, width: '100%' }}
              source={{ uri: 'https://i.pinimg.com/originals/a3/0a/49/a30a49923011bc6e59a5ca802d61f894.png' }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              style={{ height: 500, width: '100%' }}
              source={{ uri: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg' }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              style={{ height: 500, width: '100%' }}
              source={{ uri: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg' }}
            />
          </View>
        </Swiper>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity  onPress={() => {navigation.navigate('Product');}} style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <Image
              style={{ height: 130, width: '90%', justifyContent:'center',alignItems:'center',marginHorizontal:5}}
              source={{ uri: 'https://i.pinimg.com/originals/a3/0a/49/a30a49923011bc6e59a5ca802d61f894.png' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Product');}} style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <Image
              style={{ height: 130, width: '90%', justifyContent:'center',alignItems:'center',marginHorizontal:5}}
              source={{ uri: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg' }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Product');}} style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <Image
              style={{ height: 130, width: '90%', justifyContent:'center',alignItems:'center',marginVertical:5}}
              source={{ uri: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg' }}
            />
          </TouchableOpacity>
        </View>
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
AppRegistry.registerComponent('myproject', () => SwiperComponent)
export default App;