import React from 'react'
import { View, TouchableOpacity } from 'react-native'

export default function WlChangecolor() {
    return (
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ backgroundColor: 'orange', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <View style={{}}></View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'gray', height: 50, width: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                <View style={{}}></View>
            </TouchableOpacity>
        </View>
    )
}
