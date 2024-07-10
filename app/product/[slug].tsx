import { Stack, router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import Back from '@/components/layout/back';
import React from "react";
import { useProductsContext } from "@/context/cart-context";
import { Image } from 'expo-image';

const Product = () => {
    const { slug } = useLocalSearchParams();
    const { products } = useProductsContext();
    let mainProduct = products.filter((product)=> `${product.id}` === slug)[0];
    console.log(mainProduct)
    return(
        <View style={{
            flex: 1,
            backgroundColor: "#101010",
            height: "100%",
            width: "100%",
            padding: "4",
          }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                    backgroundColor: "#101010",
                    },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle:"DETAILS",
                    headerTitleStyle:{
                    fontFamily: 'MonumentRegular',
                    color: '#fff',
                    fontSize: 19,
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => (
                    <View style={{ paddingLeft: 0 }}>
                        <Back />
                    </View>
                    )
                }}
            />
            <View style={{ padding: 16, width: '100%' }}>
                    <Image transition={100}  style={{
                        width: "100%",
                        height: 300,
                        borderRadius: 7,
                        objectFit: "top",
                    }} source={`https://api.timbu.cloud/images/${mainProduct.photos[0].url}`} />
                <Text  style={{
                    fontFamily: "MonumentRegular",
                    color: "#ffffff",
                    marginVertical: 14,
                    fontSize: 21,
                }}>{mainProduct.name}</Text>
                <Text style={{
                    fontFamily: "MonumentRegular",
                    color: "#fff",
                    fontSize: 14
                }}>Size: XL</Text>
                <Text style={{
                    fontFamily: "MonumentRegular",
                    color: "#f48602",
                    fontSize: 14
                }}>Price: ${parseInt(mainProduct.current_price[0]["NGN"][0]).toLocaleString()}</Text>
            </View>
        </View>
    )
};
export default Product;