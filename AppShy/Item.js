import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, AppRegistry, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
import RnIcon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
	wrapper: {

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

export default class SwiperItem extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>

				<ScrollView style={{ flex: 1 }}>
					<View>
						<View style={{ height: 600 }}>
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
							<Text style={{ fontSize: 22, marginTop: 20, marginLeft: 15 }}>Girl from VietNam </Text>
							<Text style={{ fontSize: 24, marginTop: 10, marginLeft: 15, marginBottom: 10 }}>150$</Text>
						</View>
						<View style={{ borderTopWidth: 1, borderTopColor: "#d8d5d5", marginBottom: 20, flexDirection: 'row' }}>
							<Text style={{ fontSize: 16, marginLeft: 20, marginTop: 20 }}>Color:</Text>
							<Text style={{ fontWeight: 'bold', marginHorizontal: 3, fontSize: 16, marginTop: 20 }}>ORANGE</Text>
						</View>
						<View style={{ marginBottom: 20, marginLeft: 15, flexDirection: 'row' }}>
							<View style={{ backgroundColor: 'white', borderWidth: 2, height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center' }}>
								<View style={{ backgroundColor: 'orange', borderWidth: 3, borderColor: 'white', height: 46, width: 46, borderRadius: 46 / 2 }}></View>
							</View>
							<View style={{ backgroundColor: 'gray', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
								<View style={{}}></View>
							</View>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ marginBottom: 20, marginLeft: 10, flexDirection: 'row' }}>
								<Text style={{ fontSize: 16, marginLeft: 10, marginTop: 20 }}>Size:</Text>
								<Text style={{ fontWeight: 'bold', marginHorizontal: 3, fontSize: 16, marginTop: 20 }}>S</Text>
							</View>
							<TouchableOpacity style={{ backgroundColor: '#d8d5d5', height: 40, width: '25%', marginLeft: 220, marginTop: 10 }}>
								<Text style={{ fontSize: 16, marginLeft: 15, marginTop: 8 }}>Size Chart</Text>
							</TouchableOpacity>
						</View>
						<View style={{ marginTop: 20, marginBottom: 20, flexDirection: 'row' }}>
							<View style={{ marginLeft: 20, marginRight: 3, height: 50, width: '22%', borderWidth: 2, borderColor: 'orange' }}>
								<Text style={{ fontSize: 19, marginLeft: 37, marginTop: 10, fontWeight: 'bold' }}>S</Text>
							</View>
							<View style={{ marginRight: 3, height: 50, width: '22%', borderWidth: 1, borderRightColor: 'gray' }}>
								<Text style={{ fontSize: 19, marginLeft: 37, marginTop: 10 }}>M</Text>
							</View>
							<View style={{ marginRight: 3, height: 50, width: '22%', borderWidth: 1 }}>
								<Text style={{ fontSize: 19, marginLeft: 37, marginTop: 10 }}>L</Text>
							</View>
							<View style={{ height: 50, width: '22%', borderWidth: 1 }}>
								<Text style={{ fontSize: 19, marginLeft: 30, marginTop: 10 }}>XL</Text>
							</View>
						</View>
					</View>
				</ScrollView>
				<TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "yellow", padding: 10, height: 60, width: '90%', marginLeft: 20, marginVertical: 5 }}>
					<View >
						<Text style={{ fontSize: 22 }}>Add to Cart</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)