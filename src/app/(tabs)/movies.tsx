import { 
View, Text, StyleSheet, 
FlatList, ActivityIndicator 
} from 'react-native';
import { useState, useEffect } from 'react';

import { api } from '@/services/api';
import List from '@/components/List';
import { theme } from '@/theme';

export default function Movies(){
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    async function loadMovies(){
      const res = await api.get("r-api/?api=filmes");
      setMovies(res.data);
      setLoading(false);
    }

    loadMovies();
  },[])

  if(loading){
    return(
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={theme.colors.gray[800]} size={45}/>
      </View>
    )
  }else{
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
  loadingContainer:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
}); 