import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
  // State for InputText
  const [text, setInputText] = useState("");

  // Creating a f that get the event(text) and set the value as 'text' using the state (setInputText)
  const getInputText = (inputText) => {
    // Call the function 'setInputText' im setting the variable 'text'
    setInputText(inputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(text);
    setInputText("");
  };

  const closeModal = () => {
    props.onCloseModal();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={getInputText}
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color='#b180f0'
              // disabled={!text}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width:100,
    height: 100,
    margin: 20,
    tintColor: 'white'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#4ed0ff",
    backgroundColor: "#4ed0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
