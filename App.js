import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import PrecoAtual from "./src/components/PrecoAtual";
import Grafico from "./src/components/Grafico";
import Cotacoes from "./src/components/Cotacoes";

function addZero(number) {
  if (number <= 9) {
    return "0" + number;
  }
  return number;
}

function url(qtdDias) {
  const date = new Date();
  const listaDias = qtdDias;

  date.setFullYear(2022);

  const dataFinal = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;

  date.setDate(date.getDate() - listaDias);

  const dataInicio = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${dataInicio}&end=${dataFinal}`;
}

async function getCoins(url) {
  const response = await fetch(url);
  const returnApi = await response.json();
  let dadosApi = returnApi.bpi;
  const itensLista = Object.keys(dadosApi).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: dadosApi[key],
    };
  });
  let data = itensLista.reverse();
  return data;
}

async function getCoinsGrafico(url) {
  const responseGrafico = await fetch(url);
  const retornoApi = await responseGrafico.json();
  let dadosGraficos = retornoApi.bpi;
  const itensDadosGraficos = Object.keys(dadosGraficos).map((key) => {
    return dadosGraficos[key];
  });
  let dataGrafico = itensDadosGraficos;
  return dataGrafico;
}

export default function App() {
  const [dadosCoin, setDadosCoin] = useState(null);
  const [dadosGrafico, setDadosGrafico] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [dias, setDias] = useState(30);
  const [atualizacao, setAtualizacao] = useState(true);
  const [preco, setPreco] = useState(null);

  function atulizacaoDias(numero) {
    setDias(numero);
    setAtualizacao(true);
  }

  function ultimoPreco() {
    if (dadosGrafico != null) {
      setPreco(dadosGrafico.pop());
    } else {
      setPreco(null);
    }
  }

  useEffect(() => {
    setCarregando(true);
    getCoins(url(dias))
      .then((data) => {
        setDadosCoin(data);
      })
      .catch((erro) => console.log(erro));

    getCoinsGrafico(url(dias))
      .then((dataGrafico) => {
        setDadosGrafico(dataGrafico);
      })
      .catch((erro) => console.log(erro));

    if (atualizacao) {
      setAtualizacao(false);
    }

    ultimoPreco();

    setCarregando(false);
  }, [atualizacao]);

  return (
    <SafeAreaView style={styles.container}>
      <PrecoAtual ultimoPreco={preco} />
      <Grafico dados={dadosGrafico} status={carregando} />
      <Cotacoes
        filtroDia={atulizacaoDias}
        transacoes={dadosCoin}
        status={carregando}
      />
      <StatusBar backgroundColor="#000000" barStyle="ligth-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
});
