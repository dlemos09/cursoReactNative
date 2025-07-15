import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    height: "100%",
    padding: 10,
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabel:{
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input:{
    width: '90%',
    backgroundColor: "#f6f6f6",
    borderRadius: 50,
    height: 40,
    margin: 12,
    paddingLeft: 10,
  },
  textButtonCalculator:{
    fontSize: 20,
    color: "#fff",
  },
  buttonCalculator:{
    width: "90%",
    borderRadius: 50,
    backgroundColor: "#FF0043",
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 12,
  },
  errorMensage: {
    fontSize: 12,
    color: "#FF0043",
    fontWeight: "bold",
    paddingLeft: 20,
  }
});

export default styles;