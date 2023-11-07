import { Link , useParams , useNavigate} from "react-router-dom"
import {IoIosArrowBack} from 'react-icons/io'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useState } from "react";
import useCreateDate from "../components/useCreateDate";


        //here we are pulling state updating function setNotes as prop
        const EditNote = ({notes , setNotes}) => {
            //finding the selected note by grabbing its id and then editting it 
            const {id} = useParams();
            //matching the params id and id in the array to find the item 
            const note = notes.find((item) => item.id === id);

            // eslint-disable-next-line no-unused-vars
            //passing the title and details of the selected id in the edit notes page
            const [title , setTitle] = useState(note.title)
            // eslint-disable-next-line no-unused-vars
            const [details, setDetails] = useState(note.details)
            const date = useCreateDate();
            const navigate = useNavigate();

        const handleForm = (e) =>{
            e.preventDefault();

            if(title && details){
                const newNote = {...note, title , details , date}

                const newNotes = notes.map(item => {
                    if(item.id === id){
                        item = newNote;
                    }
                    return item;
                })

                setNotes(newNotes);
            }

            //redirect to homepage
            navigate("/")
        }


        const handleDelete = () =>{

            if(window.confirm('Are you sure you want to delete?')){
                const newNotes = notes.filter(item => item.id != id);

                setNotes(newNotes);
                navigate("/")
        
            }

            }

  return (
    <section>
            <header className="create-note__header">
                <Link to="/" className="btn">
                <IoIosArrowBack />
                </Link>
                <button onClick ={handleForm} className="btn lg primary">
                    Save
                </button>
                <button onClick ={handleDelete} className="btn danger">
                    <RiDeleteBin6Line />
                </button>
            </header>

            <form action="" className="create-note__form">
                <input type="text" placeholder="Title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea rows="28" placeholder="Note details .." value={details} onChange={(e) => setTitle(e.target.value)}></textarea>
            </form>

            <footer className="notes__footer">
               Built by Khushi Agrawal
              </footer>

    </section>
  )
}

export default EditNote