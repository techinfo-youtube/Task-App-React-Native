import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  //handle input valus
  const handleInputValue = (inputTask) => {
    setTask(inputTask);
  };

  //add taks vbutton
  const handleAddTskButton = () => {
    setTaskList((prevTaks) => [...prevTaks, task]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputValue}
          style={styles.inputBox}
          placeholder="Add your Taks"
        />
        <Button onPress={handleAddTskButton} title="Add Task" />
      </View>
      <View>
        <Text style={styles.border}></Text>
        <Text style={styles.textTitle}>Your Tasks :</Text>
        <View>
          {taskList?.map((taskItem, index) => (
            <Text style={styles.taskItem} key={index}>
              {taskItem}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
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
  textTitle: {
    marginTop: 10,
    color: "blue",
    fontSize: 26,
    fontWeight: "bold",
  },
  border: {
    borderBottomWidth: 1,
    color: "#cccccc",
  },
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "green",
    color: "white",
  },
});

export default Tasks;
