import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";

import ContacoesItem from "./CotacaoItem";

export default function Cotacoes({ filtroDia, transacoes, status }) {
  const qtdDias = filtroDia;
  return (
    <>
      <View style={styles.containerButtons}>
        <TouchableOpacity style={styles.button} onPress={() => qtdDias(7)}>
          <Text style={styles.buttonTexto}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => qtdDias(15)}>
          <Text style={styles.buttonTexto}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => qtdDias(30)}>
          <Text style={styles.buttonTexto}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => qtdDias(90)}>
          <Text style={styles.buttonTexto}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => qtdDias(180)}>
          <Text style={styles.buttonTexto}>6M</Text>
        </TouchableOpacity>
      </View>
      <View>
        {status ? (
          <View>
            <ActivityIndicator size={30} color="#f50d41" />
          </View>
        ) : (
          <FlatList
            data={transacoes}
            keyExtractor={(item) => item.data}
            renderItem={({ item }) => {
              return <ContacoesItem valor={item.valor} data={item.data} />;
            }}
          />
        )}
      </View>
    </>
  );
}
