import {useState} from "react";
import SideBar from "./Components/molecules/SideBar/index";
import Feed from './Components/molecules/Feed/index';
import RightBar from './Components/molecules/RightBar/index';
import AddP from './Components/pages/add/index'
import { Box,  Stack } from "@mui/system";
import NavBar from "./Components/molecules/NavBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar/>
        <Stack direction="row" spacing="2"  justifyContent='space-between'>
        <SideBar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>
        </Stack>
        <AddP/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
