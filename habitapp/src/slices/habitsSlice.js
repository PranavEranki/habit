import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habits: [],
  tasks: []
};

const habitsSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habits.push(action.payload);
    },
    removeHabit: (state, action) => {
      state.habits = state.habits.filter(habit => habit.id !== action.payload);
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    }
  }
});

export const { addHabit, removeHabit, addTask, removeTask } = habitsSlice.actions;
export default habitsSlice.reducer;
