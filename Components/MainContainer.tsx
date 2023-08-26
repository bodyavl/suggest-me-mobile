import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import Card from "./Card";
import { getMovies } from "../utils/";

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function getMoviesFromApi() {
    const data = await getMovies();
    setMovies(data);
  }

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getMoviesFromApi();
    setRefreshing(false)
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RefreshControl tintColor={'#fff'} refreshing={refreshing} onRefresh={onRefresh} />
      <Text style={styles.title}>Suggest.me</Text>
      <Text style={styles.descr}>
        Discover new and exciting movies with Suggest.me!{"\n"}
        {"\n"}
        Our platform generates a personalized list of films for you to enjoy,
        making it easy to find your next favorite.{"\n"}
        {"\n"}
        Give it a try and see what the algorithm suggests for you 😉
      </Text>
      <View style={styles.cards}>
        {movies.map((movie: any, index: number) => {
          return <Card key={index} title={movie.title} imgSrc={movie.poster} />;
        })}
      </View>
    </ScrollView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 64,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
  },
  descr: {
    color: "#8E95A9",
    fontSize: 16,
  },
  cards: {
    marginTop: 30,
    flex: 1,
    rowGap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
