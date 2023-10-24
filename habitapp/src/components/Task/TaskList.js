import { FlatList } from 'react-native';

<FlatList
  data={tasks} // Assuming tasks is an array of task objects from your Redux store or local state
  keyExtractor={(item) => item.id.toString()} // Use unique IDs for each task
  renderItem={({ item }) => (
    <Text>{item.name}</Text> // Render each task name
  )}
/>
