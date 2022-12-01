import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeStyles } from '../../utils/themeStyles';

const Home = () => {
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
