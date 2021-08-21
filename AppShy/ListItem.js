import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native'
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
	{
		id: '5',
		Image: 'https://1.bp.blogspot.com/-xmLV-ndC7M8/XszBqHMA_xI/AAAAAAAAmJA/53uO3K3Y9okVlMBsfqnQeFVp0DpxqcreQCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252818%2529.jpg'
	},
	{
		id: '6',
		Image: 'https://i.pinimg.com/originals/a3/0a/49/a30a49923011bc6e59a5ca802d61f894.png'
	},

];

export default function Demo({ navigation }) {

	const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;

	const renderItem = ({ item }) => (
		<View style={{ width: itemWidth, flex: 1, margin: 5 }}>
			<View>
				<Image
					style={{ height: 350, width: '100%' }}
					source={{ uri: item.Image }}
				/>
				<View style={{ position: 'absolute', top: 10, right: 10, fontSize: 18, backgroundColor: 'white', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="heart-outline" size={30} color="black" />

				</View>
			</View>
			<View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ marginTop: 10, backgroundColor: 'white', borderWidth: 2, height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center' }}>
						<View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
					</View>
					<View style={{ marginTop: 10, backgroundColor: 'gray', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
						<View style={{}}></View>
					</View>
				</View>
				<Text style={{ fontSize: 18, marginTop: 10 }}>Tshirt BlackWinter</Text>
				<Text style={{ fontSize: 18, marginTop: 10 }}>150$</Text>
			</View>
		</View>
	);
	return (
		<View style={{ flex: 1 }}>
			<View>
				<View style={{ flexDirection: 'row', marginBottom: 8 }}>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
						<Text>Sort By</Text>
						<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Relevance</Text>
					</View>
					<View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<RnIcon name="options-outline" size={30} color="black" />
						<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Filter</Text>
					</View>
				</View>
			</View>
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<FlatList
						style={{ marginTop: 10 }}
						data={DATA}
						renderItem={renderItem}
						keyExtractor={item => item.id}
						numColumns={2}
					/>
				</View>
			</SafeAreaView>
			<View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Home');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="home-outline" size={25} color="black" />
					<Text>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Product List');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="list-outline" size={25} color="black" />
					<Text>Shop</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('WishList');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="heart-outline" size={25} color="black" />
					<Text>Wishlist</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Your Bag');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="cart-outline" size={25} color="black" />
					<Text>Bag</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Login');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="person-outline" size={25} color="black" />
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
