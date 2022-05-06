import {FlatList, ImageSourcePropType, ListRenderItemInfo, StyleSheet} from "react-native";
import * as React from "react";
import {BrandItem} from "./BrandItem/BrandItem";

type BrandsType = {
    items: BrandType[]
}

type BrandType = {
    id: number
    logo: ImageSourcePropType
}

const brands: BrandsType = {
    items: [
        {
            id: 1,
            logo: require('../../assets/brand/nike.png'),
        },
        {
            id: 2,
            logo: require('../../assets/brand/adidas.png'),
        },
        {
            id: 3,
            logo: require('../../assets/brand/reebok-logo.png'),
        },
        {
            id: 4,
            logo: require('../../assets/brand/puma.png'),
        },
        {
            id: 5,
            logo: require('../../assets/brand/puma.png'),
        },
        {
            id: 6,
            logo: require('../../assets/brand/puma.png'),
        },
        {
            id: 7,
            logo: require('../../assets/brand/puma.png'),
        },
        {
            id: 8,
            logo: require('../../assets/brand/puma.png'),
        },
        {
            id: 9,
            logo: require('../../assets/brand/puma.png'),
        },

    ],
}

export const Brand = () => {

    return (
        <FlatList data={brands.items}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={(item: ListRenderItemInfo<BrandType>) => {
                      return <BrandItem key={item.item.id} logo={item.item.logo}/>
                  }}
        />
    );
};



