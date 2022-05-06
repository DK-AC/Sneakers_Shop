import React from 'react';
import {StyleSheet, Text} from "react-native";

export const Price = () => {
    return (
        <>
            <Text style={styles.price}>
                <Text style={styles.wallet}>$</Text>
                189
            </Text>
        </>
    );
};

const styles = StyleSheet.create({
    price: {
        fontSize: 23,
        fontWeight: '700',
        color: '#313B5D',
        transform: [{translateX: 160}]
    },
    wallet: {
        color: '#3A63E0',
        fontSize: 18,
        fontWeight: '700',
    }
});


