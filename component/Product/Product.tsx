import {FlatList, ImageSourcePropType, ListRenderItemInfo, StyleSheet} from 'react-native';
import {ProductItem} from "./ProductItem/ProductItem";
import * as React from "react";

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
            image: require('../../assets/shoes/mainImage2.png'),
            rating: 4,
            price: 200,
            logo: require('../../assets/brand/nikeProduct.png'),
        },
        {
            id: 2,
            name: 'Nike Air Max Plus III',
            image: require('../../assets/shoes/mainImage.png'),
            rating: 3,
            price: 198,
            logo: require('../../assets/brand/nikeProduct.png'),
        },
        {
            id: 3,
            name: 'Adidas Duramo 10',
            image: require('../../assets/shoes/adidas-gw8346-duramo_10-1.jpg'),
            rating: 3,
            price: 100,
            logo: require('../../assets/brand/adidas.png'),
        },
        {
            id: 4,
            name: 'Puma Respin SL',
            image: require('../../assets/shoes/puma-36884607-respin_sl-1.jpg'),
            rating: 4,
            price: 120,
            logo: require('../../assets/brand/puma.png'),
        },
        {
            id: 5,
            name: 'Adidas ZX 630',
            image: require('../../assets/shoes/adidas-d67565-zx_630-2.jpg'),
            rating: 4,
            price: 160,
            logo: require('../../assets/brand/adidas.png')
        },
    ],
}

export const Product = () => {
    return (
        <FlatList data={products.nike}
                  showsVerticalScrollIndicator={false}
                  renderItem={(item: ListRenderItemInfo<ProductType>) => {
                      return <ProductItem key={item.item.id}
                                          logo={item.item.logo}
                                          id={item.item.id}
                                          image={item.item.image}
                                          name={item.item.name}
                                          price={item.item.price}
                                          rating={item.item.rating}
                      />
                  }}
        />
    );
}

const styles = StyleSheet.create({
    product: {
        paddingTop: 10,
        paddingBottom: 40
    }
});
