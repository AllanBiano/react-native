import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#92674c",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#e2ad8c",
  },
});
