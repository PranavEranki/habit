import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../features/Tasks/TaskActions";
import {
  addHabit,
  setHabitUnstarted,
  setHabitStarted,
  setHabitCompleted,
} from "../features/Habits/HabitActions";

import { View, Text, FlatList, Keyboard, Alert, Dimensions } from "react-native";
import { Button, Input, VStack } from "native-base";

import Carousel from 'react-native-snap-carousel';

const windowDimensions = Dimensions.get('window');
const screenWidth = windowDimensions.width;


function HabitScreen() {
  const [habitName, setHabitName] = useState("");
  const [taskName, setTaskName] = useState(""); // If you want to add tasks similarly
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.habits.tasks);
  const habits = useSelector((state) => state.habits.habits);

  const handleAddHabit = () => {
    if (habitName.trim()) {
      const newHabit = {
        id: `habit${Date.now()}`, // Unique ID based on the current timestamp
        name: habitName,
        description: "", // Placeholder, can be updated later
        frequency: "daily", // Default value
        status: 0,
        streak: 0,
        bestStreak: 0,
        completionDates: [],
        reminders: [],
        priority: "medium", // Default value
        category: "", // Placeholder, can be updated later
        color: "#FFFFFF", // Default white color
        archived: false,
        startDate: new Date().toISOString().split("T")[0], // Current date
        endDate: "", // Placeholder, can be updated later
      };

      // Dispatch the new habit to the Redux store
      dispatch(addHabit(newHabit));
      setHabitName(""); // Clear the input after adding
      Keyboard.dismiss(); //dismiss
    } else {
      Alert.alert("Input Error", "Please enter a habit name.");
    }
  };

  // Placeholder for adding tasks, similar to habits
  const handleAddTask = () => {
    if (taskName.trim()) {
      const newTask = {
        id: `task${Date.now()}`, // Unique ID based on the current timestamp
        name: taskName,
        description: "", // Placeholder, can be updated later
        dueDate: "", // Placeholder, can be updated later
        completed: false, // Default value
        priority: "medium", // Default value
        category: "", // Placeholder, can be updated later
        color: "#FFFFFF", // Default white color
      };

      // Dispatch the new task to the Redux store
      dispatch(addTask(newTask));
      setTaskName(""); // Clear the input after adding
      Keyboard.dismiss(); //dismiss
    } else {
      Alert.alert("Input Error", "Please enter a task name.");
    }
  };

  const renderCarouselItem = ({ item }) => {
    if (item.type === "habit") {
      return (
        <VStack space={4} alignItems="center">
          <Text mt={4}>Habits</Text>
          <FlatList
            data={habits}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Box
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={2}
                >
                  <Text>{item.name}</Text>
                  <VStack>
                    <Button
                      onPress={() => {
                        dispatch(setHabitUnstarted(item.id));
                      }}
                      colorScheme={item.status === 0 ? "gray" : "outline"}
                    >
                      Reset
                    </Button>
                    <Button
                      onPress={() => {
                        dispatch(setHabitStarted(item.id));
                      }}
                      colorScheme={item.status === 1 ? "yellow" : "outline"}
                    >
                      Started
                    </Button>
                    <Button
                      onPress={() => {
                        dispatch(setHabitCompleted(item.id));
                      }}
                      colorScheme={item.status === 2 ? "green" : "outline"}
                    >
                      Completed
                    </Button>
                  </VStack>
                </Box>
              )}
          />
        </VStack>
      );
    } else if (item.type === "task") {
      return (
        <VStack space={4} alignItems="center">
          <Text mt={4}>Tasks</Text>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </VStack>
      );
    }
  };

  const carouselItems = [
        { type: 'habit' },
        { type: 'task' }
    ];

  return (
    <VStack space={4} alignItems="center">
      <Text>Habits & Tasks</Text>

      <Input
        value={habitName}
        onChangeText={setHabitName}
        placeholder="Enter habit name"
      />
      <Button onPress={handleAddHabit}>Add Habit</Button>

      <Input
        value={taskName}
        onChangeText={setTaskName}
        placeholder="Enter task name"
      />
      <Button onPress={handleAddTask}>Add Task</Button>

      <View style={{ flex: 1 }}>
            <Carousel
                data={carouselItems}
                renderItem={renderCarouselItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth - 60} // Adjust this value to change the visible "peek" of the next item
                layout="default"
            />
        </View>
    </VStack>
  );
}

export default HabitScreen;
