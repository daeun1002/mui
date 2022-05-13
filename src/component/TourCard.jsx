import * as React from 'react';
import { Paper, Grid, Typography, Box, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material'

const TourCard = ({d}) => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3} square>
          <img src={d.image} alt="photo1" className="img" />
          <Box padding={1}>
            <Typography variant="subtitle" component="h2">
              {d.name}
            </Typography>
          </Box>
          <Box paddingLeft={1} sx={{display:"flex", alignItems:"center" }}>
            <AccessTime sx={{width:12.5}} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
                {d.duration}hours
            </Typography>
          </Box>
          <Box paddingLeft={1} sx={{display:"flex", alignItems:"center" }}>
            <Rating name="half-rating" defaultVaule={2.5} precision={0.5} readonly size="small" />
            <Typography variant="body3" component="span" marginLeft={2} >
              ({d.numberOfReviews})
            </Typography>
          </Box>
          <Box padding={1}>
            <Typography variant="body4" component="h2" marginLeft={0.5}>
              {d.rating}
            </Typography>
          </Box>
      </Paper>
    </Grid>
  )
}

export default TourCard