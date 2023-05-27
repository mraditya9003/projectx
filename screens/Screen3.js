import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet } from 'react-native';

const Screen3 = ({ navigation }) => {
  const [count, setCount] = useState(15000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 100);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowPress = () => {
    navigation.navigate('Screen1');
  };

  return (
    <ImageBackground source={require('./images/award_bg.png')} style={styles.container}>
        <Text style ={styles.text}> four friends gave u some love </Text>

         

        <Image source={require('./images/main-heart.png')} style={styles.image} />
       <Image source={require('./images/girlClap.png')} style={styles.image1} />
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <TouchableOpacity onPress={handleArrowPress} style={styles.button}>
        <Text style={styles.buttonText}>Go to Screen 1</Text>

      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  image1: {
    width: 150,
    height: 200,
  },
  countContainer: {
    position: 'absolute',
    top: -260,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gold',
  },
  
  
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Screen3;
