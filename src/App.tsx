import { Typography } from '@mui/material'
import './App.css'
import { PagesLayout } from './pages'

function App() {

  return (
    <>
      <div className='logo-container'>
        <div className="logo" />
        <Typography variant='h5'>Marelis Design Studios</Typography>
      </div>
      <PagesLayout />
    </>
  )
}

export default App
