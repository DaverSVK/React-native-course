import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function goalAddHandler() {
    if (enteredGoalText !== "") {
      props.onAddGoal(enteredGoalText);
    }
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonItem}>
            <Button
              title="Add Goal"
              onPress={goalAddHandler}
              color="rgb(0, 136, 10)"
            />
          </View>
          <View style={styles.buttonItem}>
            <Button title="Cancel" onPress={props.onCancel} color="rgb(189, 86, 10)"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  modalItem: {
  },
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(189,189,189)",
    backgroundColor: 'rgb(80,80,80)',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "rgb(189,189,189)",
    backgroundColor: "rgb(65,65,65)",
    width: "90%",
    marginRight: 8,
    marginLeft: 6,
    padding: 5,
    color: "rgb(232,232,232)",
  },
  buttonContainer: {
    flexDirection: "row",
    padding: 10,
  },
  buttonItem: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
