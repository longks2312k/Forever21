import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import { getImage } from './utils/index'

import { getProductList } from './services/Api'


export default function Demo({ navigation }) {

	const [product, setProduct] = useState([])
	// const dispatch = useDispatch();
	// const product = useSelector((store) => store.productReducer.products);

	useEffect(() => {
		// dispatch(getProduct({ page: 1, limit: 10 }));
		// getProductList()
		const callGetProductList = async () => {
			try {
				const response = await getProductList();
				console.log('rs', response.data.data); // data tu api tra ve
				setProduct(response.data.data)

			} catch (error) {
				console.error(error);
			}
		}

		callGetProductList()
	}, [])

	const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;

	const renderItem = ({ item }) => (
		<View style={{ width: itemWidth, flex: 1, margin: 5 }}>
			<View>
				<Image
					style={{ height: 350, width: '100%' }}
					source={{  uri: getImage(item.images[0])  }}
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
						data={product}
						renderItem={renderItem}
						keyExtractor={item => item._id?.toString()}
						numColumns={2}
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
