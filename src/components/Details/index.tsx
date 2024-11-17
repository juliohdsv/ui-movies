import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { theme } from "@/theme";
import { DetailsProps } from "./details";

export default function Details( movie: DetailsProps ){
  return(
    <View style={styles.container}>

      <View 
        key={movie.nome}
        style={styles.modalContainer}
      >
        <TouchableOpacity 
          style={styles.button}
          onPress={ movie.back }
        >
          <Text style={styles.buttonTitle}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{movie.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.description}>{movie.sinopse}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  modalContainer:{
    height: "80%",
    width: "100%",
    backgroundColor: theme.colors.gray[800],
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  button:{
    backgroundColor: theme.colors.red,
    padding:10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  buttonTitle:{
    color: theme.colors.white,
    fontSize: 16,
  },
  title:{
    color: theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    textAlign: "center",
    fontSize:18,
    padding:10,
  },
  sinopse:{
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
    fontSize: 15,
    marginBottom: 8,
    marginLeft: 10,

  },
  description:{
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
    fontSize: 15,
    marginRight: 8,
    marginLeft: 10,
  },
})