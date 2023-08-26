import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const MainContainer = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Suggest.me</Text>
      <Text style={styles.descr}>Discover new and exciting movies with Suggest.me!{"\n"}{"\n"}
      Our platform generates a personalized list of films for you to enjoy, making it easy to find your next favorite.{"\n"}{"\n"}
      Give it a try and see what the algorithm suggests for you 😉</Text>
      <View style={styles.cards}>
        <Card/>
      </View>
      

    </ScrollView>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 64,
        fontWeight: "600",
        color: '#fff',
        marginBottom: 20,
    },
    descr: {
        color: '#8E95A9',
        fontSize: 16,
    },
    cards: {

    }
})