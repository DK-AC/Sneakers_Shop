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
    logo: ImageSourcePropType
}

const products: ProductsType = {
    nike: [
        {
            id: 1,
            name: 'Nike Air Max Plus III Ltr',
            image: require('./../../assets/mainImage2.png'),
            rating: 4,
            price: 200,
            logo: require('./../../assets/nikeProduct.png'),
        },
        {
            id: 2,
            name: 'Nike Air Max Plus III',
            image: require('./../../assets/mainImage.png'),
            rating: 3,
            price: 198,
            logo: require('./../../assets/nikeProduct.png'),
        },
        {
            id: 3,
            name: 'Adidas Duramo 10',
            image: require('./../../assets/adidas-gw8346-duramo_10-1.jpg'),
            rating: 3,
            price: 100,
            logo: require('./../../assets/adidas.png'),
        },
        {
            id: 4,
            name: 'Puma Respin SL',
            image: require('./../../assets/puma-36884607-respin_sl-1.jpg'),
            rating: 4,
            price: 120,
            logo: require('./../../assets/puma.png'),
        },
        {
            id: 5,
            name: 'Adidas ZX 630',
            image: require('./../../assets/adidas-d67565-zx_630-2.jpg'),
            rating: 4,
            price: 160,
            logo: require('./../../assets/adidas.png'),
        },
    ],
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
                                    logo={item.logo}
                />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    product: {
        paddingTop: 10,
        paddingBottom: 40
    }
});
