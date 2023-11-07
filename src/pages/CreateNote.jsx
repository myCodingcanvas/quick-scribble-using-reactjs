import { Link , useNavigate} from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import { v4  as uuid} from "uuid"
import useCreateDate from "../components/useCreateDate"
import { useState } from "react"

const CreateNote = ({setNotes}) => {
 
    const[title , setTitle] = useState("")
    const[details , setDetails] = useState("")
    const date = useCreateDate();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

           if(title && details){
             const note = {id : uuid() , title , details , date}
           
             //add this note to the notes array 
             setNotes(prevNotes => [note , ...prevNotes])

             //redirect to home page where note will be displayed
               navigate("/")
             }

    }

  return (
    <section>
        <header className="create-note__header">
            <Link to="/" className="btn">
            <IoIosArrowBack />
            </Link>
            <button className="btn lg primary" onClick={handleSubmit}>
                Save
            </button>
        </header>

        <form action="" className="create-note__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" autoFocus onChange={(e)=> setTitle(e.target.value)} value={title}/>
            <textarea rows="28" placeholder="Note details .."  onChange={(e)=> setDetails(e.target.value)} value={details}></textarea>
        </form>

        <footer className="notes__footer">
        Khushi Agrawal &#169; 2023
              </footer>

    </section>
  )
}

export default CreateNote