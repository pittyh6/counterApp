import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, } from 'react-native';

import color from '../config/colors'

function CounterScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, marginBottom: 40 }}>Count</Text>
            <TextInput
                style={styles.input}
                placeholder="Insert Value"
                keyboardType="numeric"
            />
            <View style={styles.buttonArea}>
                <TouchableHighlight onPress={() => console.log("Pressed +")}>
                    <View style={styles.button}>
                        <Text>+</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => console.log("Pressed -")}>
                    <View style={styles.button}>
                        <Text>-</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => console.log("Pressed Reset")}>
                    <View style={[styles.button, styles.buttonReset]}>
                        <Text>Reset</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={styles.resultText}>0</Text>
        </View >

    );
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 30,
        backgroundColor: color.buttonBg,
        borderRadius: 10,
        color: color.white,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonArea: {
    },
    buttonReset: {
        width: 200,
    },
    container: {
        flex: 1,
        backgroundColor: color.bg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 200,
        height: 30,
        backgroundColor: color.white,
        borderRadius: 10,
        padding: 10,
    },
    resultText: {
        color: color.resultText,
        fontSize: 100,
        fontWeight: "bold",
    },

});

export default CounterScreen;