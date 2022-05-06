import React from 'react';
import {StyleSheet, Text} from "react-native";

type PropsType = {
    price: number
}

export const Price: React.FC<PropsType> = ({price}) => {
    return (
        <>
            <Text style={styles.price}>
                <Text style={styles.wallet}>$</Text>
                {price}
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


