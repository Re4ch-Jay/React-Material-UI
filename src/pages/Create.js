import React, { useState } from 'react'
import {Typography, 
        Button, 
        Container, 
        TextField, 
        Radio,
        RadioGroup, 
        FormControlLabel,
        FormLabel,
        FormControl} from '@mui/material'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  return: {
    form: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    },
  }
})

export default function Create({note}) {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('money')
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()

    !title ? setTitleError(true) : setTitleError(false)
    !details ? setDetailsError(true) : setDetailsError(false) 

    if (title && details) {
      console.log(title, details) 
      axios.post('http://localhost:8000/notes', {title, details, category})
        .then(res => {
          navigate('/')
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  
  return (
    <Container>
      <Typography 
      variant='h5' 
      component='h2'
      color="textSecondary"
      gutterBottom
      >
          Create a New Notes
      </Typography>

    <form 
    noValidate 
    autoComplete='off'
    onSubmit={handleSubmit}
    >
      <TextField 
      label='Note Title'
      variant='outlined'
      color='secondary'
      fullWidth
      required
      error={titleError}
      sx={{marginTop: 5,
        marginBottom: 5,
        display: 'block'}}
      onChange={(e) => setTitle(e.target.value)}
      />
      <TextField 
      label='Details'
      variant='outlined'
      color='secondary'
      fullWidth
      multiline
      rows={4}
      error={detailsError}
      required
      sx={{marginTop: 5,
        marginBottom: 5,
        display: 'block'}}
      onChange={(e) => setDetails(e.target.value)}
      />
      <FormControl sx={{marginTop: 5,
        marginBottom: 5,
        display: 'block'}}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value='money' control={<Radio/>} label="Money"/>
          <FormControlLabel value='todos' control={<Radio/>} label="Todos"/>
          <FormControlLabel value='reminders' control={<Radio/>} label="Reminders"/>
          <FormControlLabel value='work' control={<Radio/>} label="Work"/>
        </RadioGroup>
      </FormControl>
      <Button 
          type='submit'
          color='secondary'
          variant='contained'
          endIcon={<ArrowForwardIosIcon/>}
         >
          Submit
        </Button>
    </form>
        
    </Container>
  )
}
