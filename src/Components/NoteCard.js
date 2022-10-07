import { DeleteOutlined } from '@mui/icons-material'
import { Card, CardHeader, CardContent, IconButton, Typography, Avatar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles({
    card: {
        border: (note) => {
           switch(note.category){
                case 'work': 
                    return "3px solid red"
                case 'money':
                    return "3px solid green"
                case 'todos':
                    return "3px solid blue"
                default:
                    return "3px solid yellow"
           }
        }
    }
})


function NoteCard({note, handleDelete}) {

    const classes = useStyles(note)

  return (
    <Card elevation={3} className={classes.card}>
        <CardHeader 
        avatar={
            <Avatar className={classes.card}>
                {note.category[0].toUpperCase()}
            </Avatar>
        }
        action={
            <IconButton aria-label="settings" 
            onClick={() => handleDelete(note.id)}
            >
                <DeleteOutlined/>
            </IconButton>
        }
        title={note.title}
        subheader={note.category}
        />
        <CardContent>
            <Typography variant='body2' color='textSecondary'>
                {note.details}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default NoteCard