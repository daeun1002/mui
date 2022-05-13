import React from 'react'
import TourCard from './component/TourCard';
import AppBars from './component/AppBars';
import data from './data.json';
import { Container, Grid, Typography } from '@mui/material';

const App = () => {
  return (
    <>
      <AppBars />
      <Container>
        {data.map((ds)=>(
          <div key={ds.id}>
            <Typography variant="subtitle" component="h2" marginTop={5} marginBottom={3}>
              {ds.name}
            </Typography>
            <Grid container spacing={5} marginBottom={3}>
              {ds.tours.map((d, index)=>
                <TourCard d={d} key={index} />
              )}
            </Grid> 
          </div>
        ))}
      </Container>
    </>
  )
}

export default App