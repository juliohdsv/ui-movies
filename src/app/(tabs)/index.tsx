import {View, Text, StyleSheet, Image} from 'react-native';

import { theme } from '@/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/images/splash.png")}
        style={styles.image}
      />
      <Text style={styles.title}>BEM-VINDO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
  title:{
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
    fontSize: 18,
  },
  image:{
    width: "100%",
    height: "30%",
  }
});