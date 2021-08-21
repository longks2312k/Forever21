import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, Image, ScrollView } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';



const DATA = [
	{
		id: '1',
		Image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwb8031c4f/1_front_750/00445473-03.jpg?sw=400&sh=600',
		Image2: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1812722d/1_front_750/00445473-01.jpg?sw=400&sh=600',
	},
	{
		id: '2',
		Image: 'https://pixwares.com/wp-content/uploads/2021/01/anh-gai-xinh.jpg',
		Image2: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1812722d/1_front_750/00445473-01.jpg?sw=400&sh=600',
	},
	{
		id: '3',
		Image: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg',
		Image2: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1812722d/1_front_750/00445473-01.jpg?sw=400&sh=600',
	},
	{
		id: '4',
		Image: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg',
		Image2: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw1812722d/1_front_750/00445473-01.jpg?sw=400&sh=600',
	},

];


export default function Wishlist({ navigation }) {

	const renderItem = ({ item }) => (
		<View style={{ flex: 1, margin: 10 }}>
			<Text style={{ fontSize: 22, marginVertical: 5, marginLeft: 5 }}>Tshirt BlackWinter</Text>
			<View style={{ flexDirection: 'row' }}>
				<Image
					style={{ height: 250, width: '40%', marginHorizontal: 10, marginBottom: 30 }}
					source={{ uri: item.Image }}
				/>
				<View style={{ flexDirection: 'row', marginBottom: 30 }}>
					<View>
						<Text style={{ fontSize: 30 }}>150$</Text>
						<Text style={{ fontSize: 22, marginTop: 15 }}>SHA#: 2311584569 </Text>

						<View style={{ flexDirection: 'row' }}>
							<TouchableOpacity style={{ backgroundColor: 'orange', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
								<View style={{}}></View>
							</TouchableOpacity>
							<TouchableOpacity style={{ backgroundColor: 'gray', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
								<View style={{}}></View>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#d8d5d5", padding: 10, height: 40, width: '90%', margin: 10, }}>
							<View >
								<Text>Add to Cart</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "#d8d5d5", padding: 10, height: 40, width: '90%', margin: 10, }}>
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
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<FlatList
						style={{ marginTop: 10 }}
						data={DATA}
						renderItem={renderItem}
						keyExtractor={item => item.id}
					/>
				</View>
			</SafeAreaView>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
});