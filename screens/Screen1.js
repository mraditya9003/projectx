import React, { useEffect } from 'react';
import { View,Text, ImageBackground, Image, StyleSheet } from 'react-native';


const Screen1 = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Screen2');
    }, 3000);
  }, []);

  const handleButtonPress = () => {
    navigation.navigate('Screen2');
  };



  return (
    <ImageBackground source={require('./images/award_bg.png')} style={styles.container}>
      <Text style = {styles.text}> The result in R</Text>

      <Image source={require('./images/girlClap.png')} style={styles.image} />
        </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gold',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 150,
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

export default Screen1;
