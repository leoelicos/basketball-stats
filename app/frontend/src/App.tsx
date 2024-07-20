import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home, Players, Teams, Games, Records, AI } from './pages'

const App = () => {
   return (
      <Router>
         <Navbar />
         <div style={{ padding: '20px' }}>
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
         </div>
      </Router>
   )
}

export default App
