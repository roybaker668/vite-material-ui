import "@fontsource/roboto";
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import theme from './assets/theme.js'
import Hero from "./components/Hero/Hero.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";
import { ThemeProvider } from "@mui/material";

function App() {
  

  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Hero/>
    <Coffee/>
    </ThemeProvider>
      
    </>
  )
}

export default App
