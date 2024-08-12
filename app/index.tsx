import React, { useState, useEffect } from "react";
import { ExpoRouter } from "expo-router";
import { Text, View, StyleSheet, Button, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient"


export default function Index() {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = "#"
  
    for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  let [count, setCount] = useState(0)

  const handlePressIncrease = () => {
    setCount(count + 1)
  }
  
  const handlePressDecrease = () => {
    setCount(count -1)
  }

  const handlePressReset = () => {
    setCount(count = 0)
  }

  const [backgroundColor, setBackgroundColor] = useState(getRandomColor())
  const animatedValue = useState(new Animated.Value(0))[0]

  useEffect(() => {
    const intervalId = setInterval(() => {

      const newColor = getRandomColor()
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      }).start(() => {
        setBackgroundColor(newColor)
        animatedValue.setValue(0)
      })
    }, 3000)

    return() => clearInterval(intervalId)
  }, [])


  return (

    <View style={[styles.container, {backgroundColor}]}>
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
      <Button 
      onPress={handlePressReset}
      title="Resets the number of the counter"
      accessibilityLabel="Learn more about how the button resets the counter"
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