import React from 'react';
import {StyleSheet, Text} from "react-native";

export const TitleItem = () => {
    return (
        <>
            <Text style={styles.title}>Nike Air Max Plus III</Text>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: '#8A8A9D',
        textAlign: 'left'
    },
})