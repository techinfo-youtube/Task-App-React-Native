import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);

  //add taks vbutton
  const handleAddTskButton = (task) => {
    setTaskList((prevTaks) => [
      ...prevTaks,
      { task: task, id: Math.random().toString() },
    ]);
  };

  //handle Delete
  const handleDelete = (id) => {
    setTaskList((currentList) => currentList.filter((t) => t.id !== id));
    console.log("Delete Item Called");
  };

  return (
    <View style={styles.container}>
      <AddTask handleAddTskButton={handleAddTskButton} />

      <Text style={styles.border}></Text>
      {taskList.length > 0 ? (
        <Text style={styles.textTitle}>Your Tasks :</Text>
      ) : (
        <Text style={styles.textTitle}>No Tasks :</Text>
      )}

      <FlatList
        data={taskList}
        renderItem={({ item, index }) => (
          <TaskItem handleDelete={handleDelete} item={item} index={index} />
        )}
        keyExtractor={(item, index) => {
          return index;
        }}
      />

      {/* <ScrollView>
       {taskList?.map((taskItem, index) => (
              <Text style={styles.taskItem} key={index}>
                {taskItem}
              </Text>
            ))} 
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
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
