import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

import { api } from '@/services/api';
import List from '@/components/List';
import { theme } from '@/theme';

export default function Movies(){
  
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    async function loadMovies(){
      const res = await api.get("r-api/?api=filmes");
      setMovies(res.data);
    }

    loadMovies();
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FILMES</Text>
      <FlatList
        data={movies}
        keyExtractor={ ìtem => String(ìtem.id) }
        renderItem={ ({item}) => <List data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black
  },
  title:{
    color: theme.colors.red,
    fontFamily: theme.fontFamily.bold,
    fontSize: 22,
    padding: 12,
  },
}); 