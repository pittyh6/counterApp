import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, } from 'react-native';

import color from '../config/colors'

function CounterScreen(props) {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState("1")

    const handleInputValue = (newInputValue) => {
        if (/^\d*$/.test(newInputValue)) {
            setInputValue(newInputValue)
        } else {
            alert('Only Numbers')
        }
    }
    const handleSum = (sumValue) => {
        sumValue = Number.parseInt(inputValue) + Number.parseInt(counter)
        setCounter(sumValue)
    }
    const handleMin = (minValue) => {
        minValue = Number.parseInt(counter) - Number.parseInt(inputValue)
        setCounter(minValue)
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 36, marginBottom: 40 }}>Count</Text>
            <TextInput
                style={styles.input}
                placeholder="Insert Value"
                keyboardType='numeric'
                type="text"
                value={inputValue}
                onChangeText={handleInputValue}
            />
            <View style={styles.buttonArea}>
                <TouchableHighlight onPress={handleSum}>
                    <View style={styles.button}>
                        <Text>+</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={handleMin}>
                    <View style={styles.button}>
                        <Text>-</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { setCounter(0), setInputValue("1") }}>
                    <View style={[styles.button, styles.buttonReset]}>
                        <Text>Reset</Text>
                    </View>
                </TouchableHighlight>
            </View>
            <Text style={styles.resultText}>{counter}</Text>
        </View >

    );
}



const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 40,
        backgroundColor: color.buttonBg,
        borderRadius: 10,
        color: color.white,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonArea: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
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
        height: 40,
        backgroundColor: color.white,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    resultText: {
        color: color.resultText,
        fontSize: 100,
        fontWeight: "bold",
    },

});

export default CounterScreen;