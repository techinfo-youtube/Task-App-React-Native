import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";

const AddTask = ({ handleAddTskButton }) => {
  const [task, setTask] = useState("");
  //handle input valus
  const handleInputValue = (inputTask) => {
    setTask(inputTask);
  };

  const addTask = () => {
    if (!task) {
      return Alert.alert("Please Add Task");
    }
    handleAddTskButton(task);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInputValue}
        style={styles.inputBox}
        placeholder="Add your Taks"
      />
      <Button onPress={addTask} title="Add Task" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 15,
  },
});

export default AddTask;
