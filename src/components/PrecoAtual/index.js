import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function PrecoAtual({ ultimoPreco }) {
  return (
    <View style={styles.headerPreco}>
      {ultimoPreco == null ? (
        <View style={styles.container}>
          <Text style={styles.textoAlternativo}>Cotação indisponível</Text>
          <Text style={styles.precoTitulo}>última cotação</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.precoAtual}>$ {ultimoPreco}</Text>
          <Text style={styles.precoTitulo}>última cotação</Text>
        </View>
      )}
    </View>
  );
}
