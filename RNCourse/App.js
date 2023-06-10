import { useState } from "react";
import { StatusBar, StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const startAddGoalHandler = () => {
    setmodalIsVisible(true);
  };

  const closeAddGoalHandler = () => {
    setmodalIsVisible(false);
  };

  const onAddGoalHandler = (inputText) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      {
        text: inputText,
        key: Math.random().toString(),
        id: Math.random().toString(),
      },
    ]);
    closeAddGoalHandler();
  };

  const onDeleteGoalHandler = (id) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((prevGoals) => prevGoals.id !== id);
    });
  };

  return (
    <>
      <StatusBar />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={onAddGoalHandler}
            onCloseModal={closeAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          {/* <ScrollView>
          {goals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>{" "}
            </View>
          ))}
        </ScrollView> */}
          {/* FlatList -> Alternativa mais performatica que o ScrollView */}
          <FlatList
            data={goals}
            renderItem={(goalItem) => {
              return (
                <GoalItem
                  text={goalItem.item.text}
                  id={goalItem.item.id}
                  onDeleteItem={onDeleteGoalHandler}
                />
              );
            }}
            // keyExtract serve para transformar um id ou algo do tipo em key, pq comp so aceita uma key
            keyExtractor={(item) => {
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
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
