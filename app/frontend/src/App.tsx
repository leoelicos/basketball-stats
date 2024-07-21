import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
   Container,
   createTheme,
   CssBaseline,
   ThemeProvider
} from '@mui/material'
import Navbar from './components/Navbar'
import { Home, Players, Teams, Games, Records, AI } from './pages'
import './App.css'

const theme = createTheme({
   palette: {
      success: {
         main: '#ff0000'
      }
   },
   typography: {},
   spacing: 4,
   breakpoints: {},
   zIndex: {},
   transitions: {},
   components: {
      MuiCssBaseline: {
         styleOverrides: (themeParam) => `
         h1 {
           color: ${themeParam.palette.success.main};
         }
       `
      }
   }
})

const App = () => {
   return (
      <Router>
         <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true} />
            <Navbar />
            <Container maxWidth="sm">
               <Routes>
                  <Route
                     path="/"
                     element={<Home />}
                  />
                  <Route
                     path="/players"
                     element={<Players />}
                  />
                  <Route
                     path="/teams"
                     element={<Teams />}
                  />
                  <Route
                     path="/games"
                     element={<Games />}
                  />
                  <Route
                     path="/records"
                     element={<Records />}
                  />
                  <Route
                     path="/ai"
                     element={<AI />}
                  />
               </Routes>
            </Container>
         </ThemeProvider>
      </Router>
   )
}

export default App
