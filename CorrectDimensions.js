This solution utilizes the useEffect hook to get dimensions after layout. 
```javascript
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CorrectDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState({ width: width, height: height });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Width: {screenDimensions.width}</Text>
      <Text>Height: {screenDimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CorrectDimensions;
```