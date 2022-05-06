import {ImageSourcePropType, StyleSheet, View} from 'react-native';
import {ProductItem} from "./ProductItem/ProductItem";

type ProductsType = {
    nike: ProductType[]
}

type ProductType = {
    id: number
    name: string
    image: ImageSourcePropType
    rating: number
    price: number
}

const products: ProductsType = {
    nike: [
        {
            id: 1,
            name: '1231',
            image: require('./../../assets/mainImage2.png'),
            rating: 4,
            price: 200
        },
        {
            id: 2,
            name: 'Nike Air Max Plus III',
            image: require('./../../assets/mainImage.png'),
            rating: 3,
            price: 198
        }
    ]
}

export const Product = () => {
    return (
        <View style={styles.product}>
            {products.nike.map((item) => {
                return <ProductItem key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    rating={item.rating}
                                    price={item.price}
                                    name={item.name}
                />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
        paddingTop: 10
    }
});
