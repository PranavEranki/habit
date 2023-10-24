const initialState = {
    habits: [],
  };
  
  const habitReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_HABIT':
        return {
          ...state,
          habits: [...state.habits, action.payload],
        };
      case 'REMOVE_HABIT':
        return {
          ...state,
          habits: state.habits.filter(habit => habit.id !== action.payload.id),
        };
      case 'UPDATE_HABIT':
        return {
          ...state,
          habits: state.habits.map(habit => 
            habit.id === action.payload.id ? action.payload : habit
          ),
        };
      case 'SET_HABIT_STATUS':
        return {
          ...state,
          habits: state.habits.map(habit => {
            if (habit.id === action.payload.id) {
              return {
                ...habit,
                status: action.payload.status,
              };
            }
            return habit;
          }),
        };
      case 'COMPLETE_HABIT':
        return {
          ...state,
          habits: state.habits.map(habit => {
            if (habit.id === action.payload.id) {
              return {
                ...habit,
                completionDates: [...habit.completionDates, action.payload.date],
              };
            }
            return habit;
          }),
        };
      default:
        return state;
    }
  };
  
  export default habitReducer;
  