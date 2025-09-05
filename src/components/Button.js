import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../theme/colors';

const Button = ({ text, type }) => {
    return (
        <View>
            <TouchableOpacity
                style={[
                    type === "primary" ? styles.button : styles.buttonSecondary
                ]}
            >
                <Text
                    style={[
                        type === "primary" ? styles.buttonText : styles.buttonTextSecondary
                    ]}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        padding: 15,
        backgroundColor: colors.background,
    },
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonSecondary: {
        backgroundColor: '#E5E7EB',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: "center",
        borderWidth: 1,
        borderColor: '#D1D5DB',
    },
    buttonText: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonTextSecondary: {
        color: '#9CA3AF',
        fontWeight: "600",
        fontSize: 16,
    }
});


export default Button