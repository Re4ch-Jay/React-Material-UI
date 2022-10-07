import React from 'react'
import {Toolbar, Typography, AppBar} from '@mui/material'

function AppBarComp({drawerWidth}) {
  return (
    <div>
        <AppBar sx={{width: `calc(100% - ${drawerWidth}px)`}}>
            <Toolbar>
                <Typography variant='h5'>
                    Write down your notes here 
                </Typography>
            </Toolbar>
        </AppBar> 
    </div>
  )
}

export default AppBarComp