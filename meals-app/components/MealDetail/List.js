import { StyleSheet, Text, View } from "react-native";

function List({ items }) {
  return items.map((item) => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemtext}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginVertical: 4,
      marginHorizontal: 12,
      backgroundColor: "#e2ad8c",
    },
    itemtext: {
      textAlign: "center",
      color: "#351401",
    },
  });