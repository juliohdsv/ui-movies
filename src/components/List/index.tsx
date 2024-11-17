import { 
  View, Text, 
  StyleSheet, Image, 
  TouchableOpacity, Modal 
} from 'react-native';
import { useState } from 'react';

import { ListProps } from './list';
import { theme } from '@/theme';
import Details from '../Details';

export default function List({ data }: ListProps){

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      key={data.id} 
      style={styles.container}
    >
      <Text style={styles.title}>{data.nome}</Text>
      <Image 
        source={{uri: data.foto}}
        style={styles.thumbnail}
      />

      <View style={styles.buttonsArea}>
        <TouchableOpacity
          onPress={()=> setModalVisible(true)}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>LEIA MAIS</Text>
        </TouchableOpacity>
      </View>

      <Modal 
        animationType='slide' 
        visible={modalVisible}
        transparent={true}        
      >
        <Details 
          nome={data.nome} 
          sinopse={data.sinopse} 
          back={ ()=> setModalVisible(false) }
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    elevation: 2
  },
  thumbnail:{
    height: 250,
    zIndex: 2,
  },
  title:{
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.white,
    fontSize:18,
    paddingBottom: 10,
  },
  buttonsArea:{
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 9
  },
  button:{
    backgroundColor: theme.colors.red,
    width: "35%",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5, 
  },
  buttonTitle:{
    color: theme.colors.white,
    fontFamily:theme.fontFamily.regular,
    textAlign: "center",
  },
});