import { Grid } from '@mui/material'
import PlayerCard from '../components/PlayerCard'
import { playerData } from './playerData'

const Players = () => {
   return (
      <>
         <h2>Players Page</h2>
         <Grid
            container
            spacing={5}
         >
            {playerData.map((props) => (
               <PlayerCard
                  {...props}
                  key={props.url}
               />
            ))}
         </Grid>
      </>
   )
}

export default Players
