import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";


interface ICardProps {
  title: string,
  imgSrc: string,
}
const Card: React.FC<ICardProps> = ({title, imgSrc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BlurView intensity={20} tint="default" style={styles.blur}>
          <Image
            source={{
              uri: imgSrc,
            }}
            style={styles.poster}
          />
          <Text style={styles.title}>{title}</Text>
        </BlurView>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "49%",
    height: 300,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    height: 300,
    backgroundColor: "rgba(32, 40, 62, 0.8)",
    overflow: "hidden",
    borderRadius: 12,
  },
  blur: {
    padding: 8,
    paddingBottom: 0,
    borderRadius: 12,
    gap: 10,
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "600",
  },
  poster: {
    flex: 1,
    borderRadius: 12,
  },
});
