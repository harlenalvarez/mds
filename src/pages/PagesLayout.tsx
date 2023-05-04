import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { MainPage } from './MainPage'
import { WindGuidePrivacy } from './WindGuidePrivacy'

export const PagesLayout = () => {
  const [path, setPath] = useState(location.pathname)

  const onPathChange = () => {
    setPath(location.pathname)
  }

  useEffect(() => {
    window.addEventListener('popstate', onPathChange)
    return () => {
      window.removeEventListener('popstate', onPathChange)
    }
  }, [])

  if (path === '/privacy/windguide') {
    return (<WindGuidePrivacy />)
  }

  // return root
  if (path === '/') {
    return (<MainPage />)
  }
  return (<Typography variant='h6'>404 Not Found</Typography>)
}