import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@mui/system'
import NoteCard from '../Components/NoteCard'
import Masonry from 'react-masonry-css'
import { Typography } from '@mui/material'

export default function Notes() {
  const [notes, setNotes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      axios.get('http://localhost:8000/notes')
      .then(res => {
        console.log(res)
        setNotes(res.data)
        setError(null)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch the data')
        setLoading(false)
        console.log(err);
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/notes/' + id)
      .then(res => {
          console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })

      const newNotes = notes.filter(note => note.id !== id)
      setNotes(newNotes)
  }
 
  return (
    <Container>
      <Masonry
      breakpointCols={{
        default: 3,
        1100: 2,
        700: 1
      }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
        {loading && <Typography variant='h5'>Loading...</Typography>}
        {error && <Typography variant='h5'>{error}</Typography>}
        {notes && notes.map(note => {
          return (
            <div key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete}/>
            </div>
          )
        })}
      </Masonry>
      
    </Container>
  )
}
