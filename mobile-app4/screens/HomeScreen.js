import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import ProductCard from "../components/ProductCard.js";

import gameCbrImage from "../assets/game6.jpg";
import gameImage from "../assets/game8.webp";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Onze modellen</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        {" "}
        <Text>Bekijk product</Text>
      </TouchableOpacity>

      <ScrollView style={styles.cardContainer}>
        <View style={styles.row}>
          <ProductCard
            title="Catan"
            subtitle="Maak je koninkrijk groot"
            price="39.99"
            image={gameCbrImage}
            onPress={() =>
              navigation.navigate("Details", {
                title: "Catan",
                subtitle: "Maak je koninkrijk groot",
                price: "39.99",
              })
            }
          />
          <ProductCard
            title="Monopoly"
            subtitle="Wordt een miljonair!"
            price="19.99"
            image={gameImage}
            onPress={() =>
              navigation.navigate("Details", {
                title: "Monopoly",
                subtitle: "Wordt een miljonair!",
                price: "19.99",
              })
            }
          />
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
  },
  heading: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#CC0000",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
});

export default HomeScreen;