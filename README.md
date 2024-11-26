## Zania - Frontend Application
[Zania](https://zania-rb.vercel.app/) is a modern frontend application built using React. It features drag-and-drop functionality, image overlays, shimmer loading effects, and automatic data saving, all managed through a React context for improved modularity and reusability. The app utilizes setInterval to automatically update the last saved time and periodically save data to a database, ensuring smooth user interactions.

### Key Features
1. Drag and Drop
The app allows users to reorder images or cards via drag-and-drop functionality.
Dragging and dropping is handled with React state, ensuring real-time updates and a seamless user experience.
2. Image Overlay
Clicking on an image triggers an overlay displaying a larger version of the image.
The overlay is interactive and can also be closed by clicking esc key.
3. Shimmer Effect
To enhance user experience during image loading, a shimmer effect is displayed until the image is fully loaded. This prevents the UI from feeling unresponsive and improves perceived performance.
4. Automatic Data Save
Every 5 seconds, the app saves the current state of the data, simulating the process of saving to a backend database.
Data is only saved if there are changes, minimizing unnecessary requests.
5. Last Saved Time
The app tracks the last saved time and updates it every 2 seconds, keeping users informed about the current state of their data.
The last saved time is displayed in a human-readable format (e.g., "X seconds ago" or "X minutes ago").
6. React Context
A central React Context is used to manage global state (such as the list of documents, the drag-and-drop state, and the overlay image).
This allows for better modularity, reusability, and management of state across the app, enabling different components to access and update the shared state without prop drilling.
7. Modular and Reusable Components
The application is built with modularity in mind. Components like Header, Cards, Overlay, and LastSavedTime are separate and reusable.
Each component focuses on a single responsibility, making the app easier to maintain and extend.

### Installation
```
git clone https://github.com/romabulani/zania.git
cd zania
npm install
npm start
```
This will start the development server and open the app in your default browser.

### Project Structure
The project is structured to ensure modularity and separation of concerns, which promotes reusability and maintainability.

#### Components
App: The root component that manages the application state and provides context to other components.
Header: A reusable header component to display the title or navigation.
Cards: Displays the list of cards or images, with drag-and-drop functionality.
Overlay: A modal that shows a larger version of the image when clicked.
LastSavedTime: Displays the last saved time, updated every 2 seconds.
Shimmer: A shimmer effect shown while images are loading.
#### Context
AppContext: A context provider that shares state (e.g., data, loading states, etc.) with the rest of the app. This centralizes state management and avoids prop drilling.
#### Services
fetchDocuments: A mock function to fetch documents or images from the database.

saveDocuments: A mock function to simulate saving data to a database.
#### Styles
App.css: The main stylesheet, including styles for the shimmer effect, drag-and-drop UI, and layout.
#### Dependencies
React: A JavaScript library for building user interfaces.

React Context: For managing global state and enabling prop drilling prevention.

### Conclusion
Zania is a simple yet powerful frontend application demonstrating several core concepts in React, such as drag-and-drop functionality, image overlays, shimmer effects for loading states, and automatic data saving. By using React Context, modular components, and hooks like setInterval, the app provides a clean, maintainable, and reusable codebase suitable for future extensions and improvements.

### License
This project is open-source and available under the MIT License.