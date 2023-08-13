import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const TaskItem = ({ index, item, handleDelete }) => {
  return (
    <Pressable
      android_ripple={{ color: "lightgray" }}
      onPress={handleDelete.bind(this, item.id)}
    >
      <Text style={styles.taskItem}>
        {index + 1} : {item.task}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "green",
    color: "white",
  },
});

export default TaskItem;
