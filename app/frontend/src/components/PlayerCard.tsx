import { Box, Grid, Link, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import LaunchIcon from '@mui/icons-material/Launch'

type PlayerCardProps = {
   firstName: string
   lastName: string
   image: string
   url: string
   team: string
   position: string
   height: string
   weight: string
   experience: number
   country: string
}
const PlayerCard: FC<PlayerCardProps> = ({
   firstName,
   lastName,
   image,
   url,
   team,
   position,
   height,
   weight,
   experience,
   country
}) => {
   const positions: { [key: string]: string } = {
      C: 'Center',
      F: 'Forward',
      G: 'Guard'
   }
   return (
      <Grid
         item={true}
         xs={3}
      >
         <Paper elevation={3}>
            <img
               src={image}
               alt={`${firstName}-${lastName}`}
               className="img"
            />
            <Box
               component="section"
               display="flex"
               flexDirection="column"
               alignItems="center"
               gap={1}
               p={2}
            >
               <Typography
                  component="h5"
                  variant="h5"
               >
                  {firstName}
               </Typography>
               <Typography
                  component="p"
                  variant="body1"
               >
                  {position
                     .split('-')
                     .map((code) => positions[code] || code)
                     .join('-')}
               </Typography>
               <Typography
                  component="h6"
                  variant="h6"
               >
                  {team}
               </Typography>

               <Link
                  href={url}
                  variant="inherit"
                  color="primary"
                  target="_blank"
                  rel="noopener"
                  aria-label={`To learn more, visit ${firstName} ${lastName}'s NBA profile`}
               >
                  <LaunchIcon />
               </Link>
            </Box>
         </Paper>
      </Grid>
   )
}

export default PlayerCard
