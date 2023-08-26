
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Header from "../Components/Header";
import MainContainer from "../Components/MainContainer";
const bgImage = require("../assets/Background.png");

export default function Home() {
  return ( 
    <SafeAreaView style={styles.container}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={styles.background}
        >
          <Header />
          <MainContainer/>
        </ImageBackground>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121829",
  },
  background: {
    flex: 1,
  },
});
