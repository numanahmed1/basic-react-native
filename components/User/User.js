import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function User({user}) {
    return (
        <View>
            <Text style={{ color: "white", fontSize: 25, marginTop: 15 }}>{user.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
