import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DetailsScreen = ({ route }) => {
  const { title, subtitle, price } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.price}>€{price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity onPress={increaseQuantity}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalPrice}>Totaal: €{price * quantity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "#CC0000",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  quantityText: {
    fontSize: 18,
    marginRight: 16,
    marginLeft: 16,
  },
  button: {
    backgroundColor: "#CC0000",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default DetailsScreen;