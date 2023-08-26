import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.container}>
      <Text>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 282,
    height: 480,
    backgroundColor: 'rgba(32, 40, 62, 0.8)',
    borderRadius: 20,
    
  },
});
