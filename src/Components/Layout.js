import { makeStyles } from '@mui/styles';
import React from 'react'
import { AddCircleOutline, SubjectOutlined } from '@mui/icons-material';
import DrawerComp from './DrawerComp';
import AppBarComp from './AppBarComp';


const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: '#f9f9f9',
            width: "100%",
            padding: theme.spacing(3),
        },
        drawer: {
            width: drawerWidth,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        root: {
            display: 'flex'
        },
        title: {
            padding: theme.spacing(2)
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }
})
function Layout({children}) {
    const classes = useStyles()

    const menuItem = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutline color='secondary'/>,
            path: '/create'
        },
    ]
  return (
    <div className={classes.root}>

        <AppBarComp drawerWidth={drawerWidth}/>
        <DrawerComp menuItem={menuItem} classes={classes}/>

        {/* Layout */}
        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
        </div>
        
    </div>
  )
}

export default Layout