import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const topCategories = [
  { id: "1", name: "Pizza", image: require("../../assets/th(2).jpg") },
  { id: "2", name: "Burgers", image: require("../../assets/th(3).jpg") },
  { id: "3", name: "Steak", image: require("../../assets/th(4).jpg") },
];

const popularItems = [
  { id: "1", name: "Food 1", price: "$1", image: require("../../assets/th(5).jpg") },
  { id: "2", name: "Food 2", price: "$3", image: require("../../assets/th(6).jpg") },
];

const saleOffItems = [
  { id: "1", name: "Food 3", price: "$2", discount: "10% OFF", image: require("../../assets/th(7).jpg") },
  { id: "2", name: "Food 4", price: "$4", discount: "20% OFF", image: require("../../assets/th(8).jpg") },
];

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
    <TouchableOpacity>
      <Text style={styles.viewAll}>View all</Text>
    </TouchableOpacity>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search for meals or area" style={styles.input} />
      </View>
      
      {/* Top Categories */}
      <Header title="Top Categories" />
      <FlatList
        horizontal
        data={topCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text>{item.name}</Text>
          </View>
        )}
      />

      {/* Popular Items */}
      <Header title="Popular Items" />
      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
      
      {/* Sale-off Items */}
      <Header title="Sale-off Items" />
      <FlatList
        horizontal
        data={saleOffItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={item.image} style={styles.itemImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchBar: { backgroundColor: "#f0f0f0", padding: 10, borderRadius: 10, marginBottom: 10 },
  input: { height: 40, backgroundColor: "white", paddingHorizontal: 10, borderRadius: 8 },
  headerContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 },
  headerText: { fontSize: 18, fontWeight: "bold" },
  viewAll: { color: "orange" },
  categoryItem: { alignItems: "center", marginRight: 10 },
  categoryImage: { width: 80, height: 80, borderRadius: 10 },
  itemCard: { backgroundColor: "#fff", padding: 10, borderRadius: 10, marginRight: 10 },
  itemImage: { width: 100, height: 100, borderRadius: 10 },
  discount: { color: "red", fontWeight: "bold" },
});

export default HomeScreen;
