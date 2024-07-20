import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <AppBar position="static">
         <Toolbar>
            <Typography
               variant="h6"
               style={{ flexGrow: 1 }}
            >
               <Button
                  color="inherit"
                  component={Link}
                  to="/"
               >
                  Basketball Stats
               </Button>
            </Typography>
            <Button
               color="inherit"
               component={Link}
               to="/players"
            >
               Players
            </Button>
            <Button
               color="inherit"
               component={Link}
               to="/teams"
            >
               Teams
            </Button>
            <Button
               color="inherit"
               component={Link}
               to="/games"
            >
               Games
            </Button>
            <Button
               color="inherit"
               component={Link}
               to="/records"
            >
               Records
            </Button>
            <Button
               color="inherit"
               component={Link}
               to="/ai"
            >
               AI
            </Button>
         </Toolbar>
      </AppBar>
   )
}

export default Navbar
