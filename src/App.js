import { ThemeProvider } from "./Context/themeContext";
import PostApp from "./post-app";
import './App.css';

function App() {
  return (
    <ThemeProvider>
        <PostApp />
    </ThemeProvider>
  );
}

export default App;