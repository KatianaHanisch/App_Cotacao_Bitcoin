import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

export default function ContacoesItem({ data, valor }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerItemEsquerda}>
        <View style={styles.containerImage}>
          <Image
            style={styles.imageLogo}
            source={require("../../../../assets/bitcoin2.png")}
          />
          <Text style={styles.data}>{data}</Text>
        </View>
      </View>
      <View style={styles.containerItemDireita}>
        <Text style={styles.preco}>{valor}</Text>
      </View>
    </View>
  );
}
