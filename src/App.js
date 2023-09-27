import './App.css';
// Material UI Web Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





//Pages
import { Box } from "@mui/material";
import TopNavigation from './Components/TopNavigation';


import { Outlet } from "react-router-dom";






function App() {
  return (
    <div className="App">
      <TopNavigation />
      <Box sx={{ mt: -2 }}>
      <Outlet />
      </Box>
    </div>
  );
}

export default App;
