import React, { useEffect, useState } from "react"
import {MdClose} from 'react-icons/md'
import {CiSearch} from "react-icons/ci"
import {BsPlusLg} from "react-icons/bs"
import { Link } from "react-router-dom"
import NoteItem from "../components/NoteItem.jsx"



const Notes = ({notes}) => {
 const [showSearch , setShowSearch] = useState(false);
 const [text , setText]= useState('');
 const [filteredNotes , setFilteredNotes] = useState(notes);


 const handleSearch = () =>{
  //filter returns a new array
  setFilteredNotes(notes.filter(note => {
    if(note.title.toLowerCase().match(text.toLocaleLowerCase())) {
      return note;
    }
  }))

 }

 //important search functionality
useEffect(handleSearch , [text])

  
  return (
    <section>
        <header className="notes__header">
           {!showSearch && <h2>My Notes</h2>}
            {showSearch && <input type="text" value= {text} onChange={(e)=> {setText(e.target.value); handleSearch();}} placeholder='Keyword...' autoFocus></input>}
            <button onClick={() => setShowSearch(prevState => !prevState)} className='btn'>{showSearch ? <MdClose/>: <CiSearch />}</button>
        </header>
        <div className="notes__container">

            {filteredNotes.length == 0 && <p className="empty__notes">No notes found.</p>}
            {
                filteredNotes.map(note =><NoteItem key= {note.id}  note={note} />)
            }
               
        </div>
             <Link  to = '/create-note' className='btn add__btn'>
             <BsPlusLg/>
             </Link> 

             <footer className="notes__footer">
               Khushi Agrawal &#169; 2023
              </footer>      
    </section>
  )
}

export default Notes