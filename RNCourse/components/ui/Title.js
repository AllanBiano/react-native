import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginTop: 100,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 12,
  },
});
