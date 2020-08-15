import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Loading</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal : 30,
        paddingVertical: 100,
        backgroundColor: "#FFF"
    },
    text:{
        color: "#000",
        fontSize: 50,
        textAlign:"center",
        marginBottom:"70%"
    }
})