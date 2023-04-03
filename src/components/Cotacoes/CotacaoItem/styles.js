import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginLeft: "2%",
    height: "auto",
    backgroundColor: "#000000",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  containerItemEsquerda: {
    width: "36%",
    alignItems: "flex-start",
  },
  containerItemDireita: {
    width: "60%",
    alignItems: "flex-end",
  },
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageLogo: {
    width: 30,
    height: 30,
    marginLeft: 2,
  },
  data: {
    fontSize: 16,
    paddingLeft: 6,
    color: "#ffffff",
    fontWeight: "bold",
  },
  preco: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
