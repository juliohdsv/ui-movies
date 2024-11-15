import { View, Text, StyleSheet, Image } from 'react-native';

import { ListProps } from './list';
import { theme } from '@/theme';

export default function List({ data }: ListProps){
  return (
    <View
      key={data.id} 
      style={styles.container}
    >
      <Image 
        source={{uri: data.foto}}
        style={styles.picture}
      />
      <Text style={styles.title}>{data.nome}</Text>
      <Text style={styles.content}>{data.sinopse}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture:{
    width: "100%",
    height: 300,
    marginTop: 10,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  title:{
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.white,
    marginTop: 10,
    marginBottom: 4,
  },
  content:{
    color: theme.colors.gray[600],
    margin: 5,
    marginBottom: 10,
  },
});