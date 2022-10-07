import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'

function DrawerComp({classes, menuItem}) {
    const navigate = useNavigate()
  return (
    <div>
         <Drawer className={classes.drawer}
        variant="permanent"
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
        >
            <div>
                <Typography variant='h5' className={classes.title}>
                    Notes Giant     
                </Typography>
            </div>

            {/* List items */}
            <List>
                {menuItem.map(item => {
                    return (
                        <ListItem key={item.id} button
                        onClick={() => navigate(item.path)}
                        className={classes.active}
                        >
                            <ListItemIcon >{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    )
                })}
            </List>
            <List>
                <ListItem>
                    <Typography className={classes.date}>
                        Today is {format(new Date(), 'do MMMM Y')} 
                    </Typography>
                </ListItem>
            </List>
        </Drawer>
    </div>
  )
}

export default DrawerComp