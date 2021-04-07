import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerInternal: {
    height: "100%",
    width: "100%",
  },
  Overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: "5%",
  },
  button: {
    width: "100%",
  },

  link: {
    marginVertical: "2%",
  },
  icon: {
    height: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  buttonFloat: {
    position: "absolute",
    backgroundColor: "#1E90FF",
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    bottom: 10,
    right: 10,
    boxShadow: "rgba(0, 0, 0, 0.15) 2px 2px 2.6px",
  },
  listItems: {
    height: 50,
    padding: 0,
    boxShadow: "rgba(0, 0, 0, 0.15) 2px 2px 2.6px",
  },
  listItemsContent: {
    height: "100%",
    width: "100%",

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%",
  },
  buttonAmount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "20%",
    height: "100%",
  },
  buttonPrice: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "100%",
  },
});
