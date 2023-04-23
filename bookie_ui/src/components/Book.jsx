import {useState, useEffect} from "react";
import axios from "axios";
import List from "./List"

function Book() {

    const [books , setNewBooks] = useState(null)
    const [formBook, setFormBook] = useState({
      isbn: "",
      title: "",
      author: "",
      publication_year: ""
    })

    useEffect(() => {
      getBooks()
        } ,[])

    function getBooks() {
      axios({
          method: "GET",
          url:"http://localhost:8000/api/book/",
        }).then((response)=>{
          const data = response.data
          setNewBooks(data)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
            }
        })}

    function createBook(event) {
        axios({
          method: "POST",
          url:"http://localhost:8000/api/book/",
          data:{
            isbn: formBook.isbn,
            title: formBook.title,
            author: formBook.author,
            publication_year: formBook.publication_year
           }
        })
        .then((response) => {
          getBooks()
        })

        setFormBook(({
            isbn: "",
            title: "",
            author: "",
            publication_year: ""}))

        event.preventDefault()
    }

    function DeleteBook(id) {
        console.log(id)
        axios({
          method: "DELETE",
          url:`http://localhost:8000/api/book/${id}/`,
        })
        .then((response) => {
          getBooks()
        })
    }

    function handleChange(event) { 
        const {value, name} = event.target
        setFormBook(prevBook => ({
            ...prevBook, [name]: value})
        )}


  return (

     <div className=''>

        <form className="create-note">
          <input onChange={handleChange} text={formBook.title} name="title" placeholder="Title" value={formBook.title} />
          <textarea onChange={handleChange} name="isbn" placeholder="Add ISBN" value={formBook.isbn} />
          <textarea onChange={handleChange} name="author" placeholder="Add Author" value={formBook.author} />
          <textarea onChange={handleChange} name="publication_year" placeholder="Add Publication Year" value={formBook.publication_year} />
          <button onClick={createBook}>Create Book</button>
        </form>

        { books && books.map(book => <List
        key={book.id}
        id={book.id}
        title={book.title}
        isbn={book.isbn}
        author={book.author}
        publication_year={book.publication_year}
        deletion={DeleteBook}
        />
        )}

    </div>

  );
}

export default Book;