import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { Search } from "@/components/ui/icons";
import { StatusBar } from "expo-status-bar";
import useFetch from "@/hooks/useFetch";
import ProductCard from "@/components/card/product-card";

export default function HomeScreen() {
  const { data, isLoading, error, refetch } = useFetch();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#101010",
        height: "100%",
        width: "100%",
        padding: "4",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#101010",
          },
          headerShadowVisible: false,
          headerBackVisible: true,
          headerTitle: "Odyah",
          headerTitleStyle: {
            fontFamily: "MonumentUltraBold",
            color: "#fff",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <View style={{ paddingLeft: 5 }}>
              <Search />
            </View>
          ),
        }}
      />
      <StatusBar backgroundColor="#101010" style="light" />
      {isLoading ? (
        <ActivityIndicator size={60} color="#ffffff" />
      ) : error ? (
         <View style={{ height: "max-content", marginVertical: "auto" }}>   
        <Text
          style={{
            fontFamily: "MonumentRegular",
            color: "#f48602",
            fontSize: 18,
            alignItems: "center",
            textAlign: "center",
            marginVertical: "auto",
          }}
        >
          Something went wrong
        </Text>
        <TouchableOpacity style={{ backgroundColor: '#f48402', borderRadius: 6, paddingHorizontal: 20, paddingVertical: 13, width: 120, marginHorizontal: 'auto', marginTop: 20 }} onPress={()=> refetch()}>
          <Text style={{ fontFamily: 'MonumentRegular', color: '#ffffff', width: 'fit-content' }}>Refresh</Text>
        </TouchableOpacity>
      </View>
      ) : (
        <FlatList
          data={data.items}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          contentContainerStyle={{ columnGap: 10, width: "100%", padding: 5 }}
          columnWrapperStyle={{
            gap: 20,
            padding: 10,
          }}
          renderItem={({ item }) => (
            <ProductCard
              image={item.photos[0].url}
              price={item.current_price[0]["NGN"][0]}
              name={item.name}
              id={item.id}
            />
          )}
          numColumns={2}
        />
      )}
    </View>
  );
}
