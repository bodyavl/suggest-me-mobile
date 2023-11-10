import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { DetailsProps } from "../types";
const bgImage = require("../assets/Background.png");

export interface IDetailsProps {
  id: string;
}

const Details = ({ route, navigation }: DetailsProps) => {
  const { id } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.background}
      >
        <View>
          <Text>Movie Details</Text>
          <Text>Movie id: {id}</Text>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121829",
  },
  background: {
    flex: 1,
  },
});
