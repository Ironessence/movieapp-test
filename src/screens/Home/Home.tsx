import { useFocusEffect } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { themeStyles } from '../../utils/themeStyles';
//@ts-ignore
import { API_KEY } from '@env';

const Home = () => {
  useFocusEffect(
    React.useCallback(() => {
      console.log(API_KEY);
    }, []),
  );

  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        colors={[themeStyles.blue, themeStyles.purple]}
        style={styles.container}
        start={{ x: 0.1, y: 0.9 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Home;
