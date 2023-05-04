import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import WindGuide from '../assets/windguide.png'
import { navigateTo } from '../utils/navigation'

export const Container = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  justify-content: space-evenly;
  align-items: stretch;
`


export const MainPage = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          image={WindGuide}
          title='Pole with two flags on a beach'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">Wind Guide</Typography>
          <Typography variant="body2" color="text.secondary">
            Get real-time wind speed,  direction and condition data with our app! Our app uses your location and compass data to display the wind speed and direction relative to your heading, and it forecasts up to 6 hours.
            With our app, you can easily plan your marine activities based on the weather conditions. Whether you’re a sailor, surfer, or kiteboarder, our app has you covered!
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Visit App Store</Button> */}
          <Button size="small" onClick={() => navigateTo('/privacy/windguide')}>Privacy</Button>
        </CardActions>
      </Card>
    </Container>
  )
}