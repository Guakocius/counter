import React, { useState } from "react";
import { ExpoRouter } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";
import LinearGradient from "react-native-linear-gradient"


export default function Index() {

  const countIncrease = document.getElementById("countIncrease")

  const [count, setCount] = useState(0)

  const handlePressIncrease = () => {
    setCount(count + 1)
  }
  
  const handlePressDecrease = () => {
    setCount(count -1)
  }

  return (

    <View style={styles.container}>
      <Text style={styles.helloText}>This App is supposed to test the difficulties and the compatibility of implementing a React Native Script within our main App</Text>
      <Button
       onPress={handlePressIncrease}
      title="Increase the number of the counter by +1"
      accessibilityLabel="Learn more about how the button changes the counter by +1"
      />
      <Button 
      onPress={handlePressDecrease}
      title="Decrease the number of the counter by -1"
      accessibilityLabel="Learn more about how the button changes the counter by -1"
      />

      <Text style={styles.countText}>Count: {count}</Text>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4fa5"
  },

  helloText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
    marginBottom: 30
  },

  countText: {
    marginTop: 20,
    fontSize: 24,
    color: "red",
    fontWeight: "bold"
  }

})