import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';

const ProductCard = ({ image, name, price, id }) => {
  return (
    <Pressable onPress={() => router.push(`/product/${id}`)}  style={{ width: "45%" }}>
      <View  style={{
        marginBottom: 10,
        width: "max-content"
      }}>
        <Image transition={150} style={{
          height: 200,
          borderRadius: 10,
          objectFit: "top",
          width: "max-content"
        }} source={`https://api.timbu.cloud/images/${image}`} />
        <View style={{
          marginTop: 4,
          marginBottom: 2
        }}>
          <Text  style={{
            fontFamily: "MonumentRegular",
            color: "#fff",
            fontSize: 15
          }}>
            {name}
          </Text>
        </View>
        <Text style={{
          fontFamily: "MonumentRegular",
          color: "#f48602",
          fontSize: 14
        }}>${parseInt(price).toLocaleString()}</Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
