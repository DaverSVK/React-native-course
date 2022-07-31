import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAtGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function goalAddHandler(enteredGoalText) {
    setCourseGoals((currentGoalState) => [
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentGoalState) => {
      return currentGoalState.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <Button
          title="Add new goal"
          color="rgb(0, 136, 10)"
          onPress={startAtGoalHandler}
        />
      </View>
      {modalIsVisible && (
        <GoalInput
          onAddGoal={goalAddHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
      )}
      <View style={styles.listList}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: "rgb(80,80,80)",
  },
  inputContainer: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(189,189,189)",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "rgb(189,189,189)",
    backgroundColor: "rgb(65,65,65)",
    width: "70%",
    marginRight: 8,
    padding: 5,
    color: "rgb(232,232,232)",
  },
  listList: {
    flex: 7,
  },
});

// import React from 'react';
// import { Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={{ padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-around', alignItems: 'center' }}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           flex: 3,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>1</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'blue',
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'green',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>3</Text>
//       </View>
//     </View>
//   );
// }
