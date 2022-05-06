import {StyleSheet, View} from 'react-native';
import {ProductItem} from "./ProductItem/ProductItem";

export const Product = () => {
    return (
        <View style={styles.product}>
            <ProductItem image={require('./../../assets/mainImage.png')}/>
            <ProductItem image={require('./../../assets/mainImage2.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
        paddingTop: 10
    }
});
