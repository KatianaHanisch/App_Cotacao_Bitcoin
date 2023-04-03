import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerButtons: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  button: {
    height: 30,
    width: 50,
    backgroundColor: "#f50d41",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
