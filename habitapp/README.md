# File structure
assets: Contains all static assets like fonts, images, and other media files.

src: Contains the main source code of the app.

components: Houses reusable UI components. It's further divided based on the component's purpose or feature.

features: Contains logic related to specific features of the app. This includes actions, reducers, and any other logic specific to that feature.

navigation: Manages the app's navigation. This can include stack navigators, tab navigators, etc.

screens: Contains the main screens or views of the app. Each screen typically corresponds to a different view or functionality in the app.

slices: Contains Redux slices. Each slice typically manages a specific part of the app's state.

store: Contains the main Redux store configuration.

node_modules: Contains all the modules and libraries installed via npm or yarn.

App.js: The main entry point of the app.

app.json: Contains configuration settings for the app.

package.json: Contains metadata about the app, like its dependencies.


## data structure basics
#### Data Structure:
1. Habits:
- id: A unique identifier for each habit.
- name: The name of the habit.
- description: A brief description of the habit (optional).
- frequency: How often the habit should be done (e.g., daily, weekly).
- streak: The number of consecutive days the habit has been completed.
- created_at: The date and time when the habit was created.
- last_completed_at: The last date and time when the habit was completed.
2. Tasks:
- id: A unique identifier for each task.
- name: The name of the task.
- description: A brief description of the task (optional).
- due_date: The date by which the task should be completed.
- completed: A boolean indicating whether the task has been completed.
- created_at: The date and time when the task was created.