import NoteContext  from './NoteContext';
import { useState } from 'react';

const NoteState = (props)=>{

    const notesInitial=[
        {
          "_id": "62bf0903e8bde49a3235615d",
          "user": "62bedc36e9770956f7c7dd14",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-07-01T14:47:31.277Z",
          "__v": 0
        },
        {
          "_id": "62bf0903e8bde49a3235615f",
          "user": "62bedc36e9770956f7c7dd14",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-07-01T14:47:31.709Z",
          "__v": 0
        },
        {
          "_id": "62bf0904e8bde49a32356161",
          "user": "62bedc36e9770956f7c7dd14",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2022-07-01T14:47:32.507Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;