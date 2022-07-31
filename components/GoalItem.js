import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.listItem}>
      <Pressable
        style={({pressed})=> pressed && styles.pressedItem}
        //android_ripple={{ color: "rgb(189, 0, 6)" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.listText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    margin: 5,
    borderWidth: 1,
    borderColor: "rgb(189,189,189)",
    borderRadius: 5,
    backgroundColor: "rgba(0, 136, 10, 0.74)",
  },
  pressedItem: {
    flex:1,
    opacity: 0.8,
    backgroundColor: "rgb(191, 80, 56)",
    borderRadius: 4,

  },
  listText: {
    borderRadius: 5,
    padding: 12,
    color: "rgb(232,232,232)",
    fontSize: 16,
  },
});
