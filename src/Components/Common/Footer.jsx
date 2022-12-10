import React from 'react'

import { footer } from '../../Routes/FooterItems'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Footer = () => {


  return (

    <>

    {/* <AppBar position="static">
      <Toolbar variant="dense">
        <Box>
          <Button href="#top">
            <h3>Scroll to up</h3>
          </Button>
        </Box>
        <Toolbar disableGutters>
          <img src="./images/DH.png" alt='DH-logo' className='img-logo-dh' style={{width: '30%'}} />
        </Toolbar>
        <ListItem>
          
          <Box>
            {footer.map((item) => (
              <BottomNavigationAction
                key={item.id}
                label={item.label}
                href={item.route}
                icon={item.Icon}
              />
            ))}
          </Box>
        </ListItem>
      </Toolbar>
    </AppBar> */}

    <footer>
      <Grid color='primary'
        container
        direction='column'
      >
        <Grid item>
          <Grid container 
            width={'100%'}
          >
            <Button 
              variant='red-button'
              href="#top" 
              startIcon={<KeyboardArrowUpIcon fontSize='large'/>}
              endIcon={<KeyboardArrowUpIcon fontSize='large'/>}
            >
              <Typography variant='h5'>
                Scroll to up
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container 
              alignItems='center'
              direction='row'
          >
            <Toolbar disableGutters>
              <img src="./images/DH.png" alt='DH-logo' className='img-logo-dh' style={{width: '30%'}} />
            </Toolbar>
            <ListItem>
                {footer.map((item) => (
                  <BottomNavigationAction 
                    key={item.id} 
                    label={item.label} 
                    href={item.route} 
                    icon={item.Icon} 
                  />
                ))}
            </ListItem>
          </Grid>
        </Grid>
      </Grid>
    </footer>

    </>

  )
}

export default Footer;
