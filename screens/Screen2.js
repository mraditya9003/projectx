import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Screen2 = ({ navigation }) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsImageVisible(false);
      setTimeout(() => {
        navigation.navigate('Screen3');
      }, 20000);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleArrowPress = () => {
    navigation.navigate('Screen3');
  };

  return (
    <ImageBackground source={require('./images/award_bg.png')} style={styles.container}>
      {isImageVisible && (
        <Image source={require('./images/girlClap.png')} style={styles.image} />
      )}
      <TouchableOpacity onPress={handleArrowPress} style={styles.arrowButton}>
        <Image source={require('./images/arrow.png')} style={styles.arrowImage} />
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  arrowButton: {
    position: 'absolute',
    bottom: 20,
  },
  arrowImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default Screen2;
